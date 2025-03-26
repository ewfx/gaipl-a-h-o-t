import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
 
})
export class ChatboxComponent implements OnInit {

  @ViewChild('chatContainer') chatContainer!: ElementRef;
  messages: Message[] = [];
  newMessage: string = '';

  constructor() {}

  ngOnInit(): void {
    this.addBotMessage('Hello! How can I help you today?');
  }

  addBotMessage(text: string): void {
    this.messages.push({ text, sender: 'bot' });
    this.scrollToBottom();
  }

  addUserMessage(text: string): void {
    if (text.trim()) {
      this.messages.push({ text, sender: 'user' });
      this.newMessage = '';
      this.scrollToBottom();
      this.processUserInput(text);
    }
  }

  processUserInput(text: string): void {
    // Simulate bot response based on user input
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText.includes('hello') || lowerCaseText.includes('hi')) {
      setTimeout(() => {
        this.addBotMessage('Hello there! How can I assist you?');
      }, 500); // Simulate bot thinking time
    } else if (lowerCaseText.includes('how are you')) {
      setTimeout(() => {
        this.addBotMessage('I am doing well, thank you for asking!');
      }, 500);
    } else if (lowerCaseText.includes('bye') || lowerCaseText.includes('goodbye')) {
      setTimeout(() => {
        this.addBotMessage('Goodbye! Have a great day!');
      }, 500);
    } else {
      setTimeout(() => {
        this.addBotMessage('I am sorry, I did not understand that.');
      }, 500);
    }
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
interface Message {
  text: string;
  sender: 'user' | 'bot';
}
