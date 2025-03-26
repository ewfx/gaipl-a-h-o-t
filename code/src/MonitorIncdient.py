#from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
#from sklearn.pipeline import Pipeline
import joblib  # For saving/loading models


import requests
import json
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import joblib
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# ServiceNow API credentials and instance details (replace with your values)
# ... (ServiceNow credentials)

# OpenAI API key (replace with your key)
OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"

# Function to analyze incident description using GenAI
def analyze_description_genai(description):
    llm = OpenAI(openai_api_key=OPENAI_API_KEY)
    prompt = PromptTemplate(
        input_variables=["description"],
        template="Summarize the following incident description and extract relevant keywords: {description}",
    )
    chain = LLMChain(llm=llm, prompt=prompt)
    return chain.run(description)

# Function to train the model (modified)
def train_model():
    incidents = get_servicenow_incidents()
    if not incidents:
        return None

    descriptions = []
    teams = []

    for incident in incidents:
        if incident['assignment_group'] and incident['short_description'] and incident['description']:
            full_description = incident['short_description'] + " " + incident['description']
            genai_analysis = analyze_description_genai(full_description)
            descriptions.append(genai_analysis)
            teams.append(incident['assignment_group']['display_value'])

    if not descriptions or not teams:
        print("no data to train on.")
        return None

    model = Pipeline([
        ('clf', MultinomialNB()),
    ])

    model.fit(descriptions, teams)
    joblib.dump(model, 'incident_assignment_model.joblib')
    print("Model trained and saved.")
    return model

# Function to predict team assignment (modified)
def predict_team(description):
    try:
        model = joblib.load('incident_assignment_model.joblib')
        genai_analysis = analyze_description_genai(description)
        return model.predict([genai_analysis])[0]
    except FileNotFoundError:
        print("Model file not found. Training model first.")
        return None

# ... (rest of the code: get_servicenow_incidents, assign_incident_to_team, main)



# ServiceNow API credentials and instance details (replace with your values)
SERVICENOW_INSTANCE = 'your_instance.service-now.com'
SERVICENOW_USER = 'your_username'
SERVICENOW_PASSWORD = 'your_password'
SERVICENOW_TABLE = 'incident'  # ServiceNow incident table

# Function to fetch incidents from ServiceNow
def get_servicenow_incidents():
    url = f'https://{SERVICENOW_INSTANCE}/api/now/table/{SERVICENOW_TABLE}'
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
    response = requests.get(url, auth=(SERVICENOW_USER, SERVICENOW_PASSWORD), headers=headers)

    if response.status_code == 200:
        return response.json()['result']
    else:
        print(f"Error fetching incidents: {response.status_code}, {response.text}")
        return None    


# Function to assign incident to team in ServiceNow
def assign_incident_to_team(incident_number, team_name):
    url = f'https://{SERVICENOW_INSTANCE}/api/now/table/{SERVICENOW_TABLE}/{incident_number}'
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
    data = {'assignment_group': {'display_value': team_name}} # assign group by display name
    response = requests.put(url, auth=(SERVICENOW_USER, SERVICENOW_PASSWORD), headers=headers, data=json.dumps(data))

    if response.status_code == 200:
        print(f"Incident {incident_number} assigned to {team_name}.")
    else:
        print(f"Error assigning incident: {response.status_code}, {response.text}")

# Main agent logic
def main():
    # Train the model (run this once or periodically)
    if predict_team("test") is None:
        train_model()

    incidents = get_servicenow_incidents()
    if not incidents:
        return

    for incident in incidents:
        if not incident['assignment_group'] and incident['short_description'] and incident['description']: # only assign if not already assigned.
            description = incident['short_description'] + " " + incident['description']
            predicted_team = predict_team(description)

            if predicted_team:
                assign_incident_to_team(incident['number'], predicted_team)

if __name__ == '__main__':
    main()