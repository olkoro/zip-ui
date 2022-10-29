import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>('/api/files')
  }

  downloadFile(file: string) {
    return this.http.get('/api/file', {responseType: 'blob', params: {'file': file}, observe: 'response'});
  }

  downloadAll() {
    return this.http.get('/api/files/download', {responseType: 'blob', params: {}, observe: 'response'});
  }
}
