import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  getText(name?: string): Observable<string> {
    let param = '';
    if (name) {
      param = '?name=' + name
    }
    return this.http.get('/api/hello' + param, {responseType: 'text'})
  }
}
