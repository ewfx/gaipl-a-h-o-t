import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
  }

}
