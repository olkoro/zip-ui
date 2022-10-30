import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../model/Message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesUrl = '/api/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl)
  }

  postMessage(message: Message) {
    return this.http.post(this.messagesUrl, message);
  }
}
