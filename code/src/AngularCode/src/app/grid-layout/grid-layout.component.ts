import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['incticket', 'priority', 'RTO','LOB','Application','IncStartTime',
  'IncEndStmie','IssueDescription','BusinessImpact','Status','SeniorLeader','PlatformLeader','CIODirect'];
  
  dataSource = [
    {
      incticket: 'INC001',
      priority: 'High',
      RTO: '2 hours',
      LOB: 'Finance',
      Application: 'SAP',
      IncStartTime: '2024-03-25 08:00 AM',
      IncEndStmie: '2024-03-25 10:00 AM', 
      IssueDescription: 'Payment processing failure',
      BusinessImpact: 'Unable to process payments',
      Status: 'Resolved',
      SeniorLeader: 'John Doe',
      PlatformLeader: 'Jane Smith',
      CIODirect: 'Mike Johnson'
    },
    {
      incticket: 'INC002',
      priority: 'Medium',
      RTO: '4 hours',
      LOB: 'HR',
      Application: 'Workday',
      IncStartTime: '2024-03-25 09:00 AM',
      IncEndStmie: '2024-03-25 01:00 PM',
      IssueDescription: 'Login issues for employees',
      BusinessImpact: 'Employees unable to access HR portal',
      Status: 'Investigating',
      SeniorLeader: 'Alice Brown',
      PlatformLeader: 'David Lee',
      CIODirect: 'Sarah White'
    },
    {
      incticket: 'INC003',
      priority: 'Critical',
      RTO: '1 hour',
      LOB: 'Retail',
      Application: 'POS System',
      IncStartTime: '2024-03-25 07:30 AM',
      IncEndStmie: '2024-03-25 09:00 AM',
      IssueDescription: 'Point-of-sale system outage',
      BusinessImpact: 'Stores unable to process transactions',
      Status: 'Resolved',
      SeniorLeader: 'Emma Watson',
      PlatformLeader: 'Chris Evans',
      CIODirect: 'Robert Downey'
    },
    {
      incticket: 'INC004',
      priority: 'Low',
      RTO: '6 hours',
      LOB: 'IT',
      Application: 'Email Server',
      IncStartTime: '2024-03-25 11:00 AM',
      IncEndStmie: '2024-03-25 03:00 PM',
      IssueDescription: 'Delayed email delivery',
      BusinessImpact: 'Minor communication delays',
      Status: 'Monitoring',
      SeniorLeader: 'Liam Johnson',
      PlatformLeader: 'Sophia Miller',
      CIODirect: 'Oliver Thomas'
    }
    ,
    {
      incticket: 'INC002',
      priority: 'Medium',
      RTO: '4 hours',
      LOB: 'HR',
      Application: 'Workday',
      IncStartTime: '2024-03-25 09:00 AM',
      IncEndStmie: '2024-03-25 01:00 PM',
      IssueDescription: 'Login issues for employees',
      BusinessImpact: 'Employees unable to access HR portal',
      Status: 'Investigating',
      SeniorLeader: 'Alice Brown',
      PlatformLeader: 'David Lee',
      CIODirect: 'Sarah White'
    },
    {
      incticket: 'INC003',
      priority: 'Critical',
      RTO: '1 hour',
      LOB: 'Retail',
      Application: 'POS System',
      IncStartTime: '2024-03-25 07:30 AM',
      IncEndStmie: '2024-03-25 09:00 AM',
      IssueDescription: 'Point-of-sale system outage',
      BusinessImpact: 'Stores unable to process transactions',
      Status: 'Resolved',
      SeniorLeader: 'Emma Watson',
      PlatformLeader: 'Chris Evans',
      CIODirect: 'Robert Downey'
    },
    {
      incticket: 'INC004',
      priority: 'Low',
      RTO: '6 hours',
      LOB: 'IT',
      Application: 'Email Server',
      IncStartTime: '2024-03-25 11:00 AM',
      IncEndStmie: '2024-03-25 03:00 PM',
      IssueDescription: 'Delayed email delivery',
      BusinessImpact: 'Minor communication delays',
      Status: 'Monitoring',
      SeniorLeader: 'Liam Johnson',
      PlatformLeader: 'Sophia Miller',
      CIODirect: 'Oliver Thomas'
    }
    ,
    {
      incticket: 'INC002',
      priority: 'Medium',
      RTO: '4 hours',
      LOB: 'HR',
      Application: 'Workday',
      IncStartTime: '2024-03-25 09:00 AM',
      IncEndStmie: '2024-03-25 01:00 PM',
      IssueDescription: 'Login issues for employees',
      BusinessImpact: 'Employees unable to access HR portal',
      Status: 'Investigating',
      SeniorLeader: 'Alice Brown',
      PlatformLeader: 'David Lee',
      CIODirect: 'Sarah White'
    },
    {
      incticket: 'INC003',
      priority: 'Critical',
      RTO: '1 hour',
      LOB: 'Retail',
      Application: 'POS System',
      IncStartTime: '2024-03-25 07:30 AM',
      IncEndStmie: '2024-03-25 09:00 AM',
      IssueDescription: 'Point-of-sale system outage',
      BusinessImpact: 'Stores unable to process transactions',
      Status: 'Resolved',
      SeniorLeader: 'Emma Watson',
      PlatformLeader: 'Chris Evans',
      CIODirect: 'Robert Downey'
    },
    {
      incticket: 'INC004',
      priority: 'Low',
      RTO: '6 hours',
      LOB: 'IT',
      Application: 'Email Server',
      IncStartTime: '2024-03-25 11:00 AM',
      IncEndStmie: '2024-03-25 03:00 PM',
      IssueDescription: 'Delayed email delivery',
      BusinessImpact: 'Minor communication delays',
      Status: 'Monitoring',
      SeniorLeader: 'Liam Johnson',
      PlatformLeader: 'Sophia Miller',
      CIODirect: 'Oliver Thomas'
    }
    ,
    {
      incticket: 'INC002',
      priority: 'Medium',
      RTO: '4 hours',
      LOB: 'HR',
      Application: 'Workday',
      IncStartTime: '2024-03-25 09:00 AM',
      IncEndStmie: '2024-03-25 01:00 PM',
      IssueDescription: 'Login issues for employees',
      BusinessImpact: 'Employees unable to access HR portal',
      Status: 'Investigating',
      SeniorLeader: 'Alice Brown',
      PlatformLeader: 'David Lee',
      CIODirect: 'Sarah White'
    },
    {
      incticket: 'INC003',
      priority: 'Critical',
      RTO: '1 hour',
      LOB: 'Retail',
      Application: 'POS System',
      IncStartTime: '2024-03-25 07:30 AM',
      IncEndStmie: '2024-03-25 09:00 AM',
      IssueDescription: 'Point-of-sale system outage',
      BusinessImpact: 'Stores unable to process transactions',
      Status: 'Resolved',
      SeniorLeader: 'Emma Watson',
      PlatformLeader: 'Chris Evans',
      CIODirect: 'Robert Downey'
    },
    {
      incticket: 'INC004',
      priority: 'Low',
      RTO: '6 hours',
      LOB: 'IT',
      Application: 'Email Server',
      IncStartTime: '2024-03-25 11:00 AM',
      IncEndStmie: '2024-03-25 03:00 PM',
      IssueDescription: 'Delayed email delivery',
      BusinessImpact: 'Minor communication delays',
      Status: 'Monitoring',
      SeniorLeader: 'Liam Johnson',
      PlatformLeader: 'Sophia Miller',
      CIODirect: 'Oliver Thomas'
    }
    ,
    {
      incticket: 'INC002',
      priority: 'Medium',
      RTO: '4 hours',
      LOB: 'HR',
      Application: 'Workday',
      IncStartTime: '2024-03-25 09:00 AM',
      IncEndStmie: '2024-03-25 01:00 PM',
      IssueDescription: 'Login issues for employees',
      BusinessImpact: 'Employees unable to access HR portal',
      Status: 'Investigating',
      SeniorLeader: 'Alice Brown',
      PlatformLeader: 'David Lee',
      CIODirect: 'Sarah White'
    },
    {
      incticket: 'INC003',
      priority: 'Critical',
      RTO: '1 hour',
      LOB: 'Retail',
      Application: 'POS System',
      IncStartTime: '2024-03-25 07:30 AM',
      IncEndStmie: '2024-03-25 09:00 AM',
      IssueDescription: 'Point-of-sale system outage',
      BusinessImpact: 'Stores unable to process transactions',
      Status: 'Resolved',
      SeniorLeader: 'Emma Watson',
      PlatformLeader: 'Chris Evans',
      CIODirect: 'Robert Downey'
    },
    {
      incticket: 'INC004',
      priority: 'Low',
      RTO: '6 hours',
      LOB: 'IT',
      Application: 'Email Server',
      IncStartTime: '2024-03-25 11:00 AM',
      IncEndStmie: '2024-03-25 03:00 PM',
      IssueDescription: 'Delayed email delivery',
      BusinessImpact: 'Minor communication delays',
      Status: 'Monitoring',
      SeniorLeader: 'Liam Johnson',
      PlatformLeader: 'Sophia Miller',
      CIODirect: 'Oliver Thomas'
    }
  ];
  ngOnInit(): void {
    
  }
  chatOpen = false;
  newMessage = '';
  messages = [
    { sender: 'Bot', text: 'Hello! How can I help you?' }
  ];

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'You', text: this.newMessage });
      this.newMessage = '';
      setTimeout(() => {
        this.messages.push({ sender: 'Bot', text: 'This is an automated response.' });
      }, 1000);
    }
  }

}
