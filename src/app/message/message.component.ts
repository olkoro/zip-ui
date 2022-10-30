import { Component, OnInit } from '@angular/core';
import {Message} from "../model/Message";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  private getMessages() {
    this.messageService.getMessages().subscribe(res => this.messages = res);
  }

  postMessage() {
    if (this.newMessage.length < 1) {
      return;
    }
    let message: Message = new Message();
    message.value = this.newMessage;
    this.newMessage = '';
    this.messageService.postMessage(message).subscribe(res => this.getMessages());
  }
}
