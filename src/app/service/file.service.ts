import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private filesUrl = '/api/files';

  constructor(private http: HttpClient) { }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(this.filesUrl)
  }

  downloadFile(file: string) {
    return this.http.get(this.filesUrl + '/' + file, {responseType: 'blob', params: {'file': file}, observe: 'response'});
  }

  downloadAll() {
    return this.http.get(this.filesUrl + '/download', {responseType: 'blob', params: {}, observe: 'response'});
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.filesUrl, formData);
  }
}
