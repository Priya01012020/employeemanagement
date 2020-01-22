import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://192.168.0.129:7002/';
  constructor(private http: HttpClient) {}
  getMethod( url: string) {
      return this.http.get(this.uri + url);
  }
  PostMethod( url: string, data: any) {
    return this.http.post(this.uri + url, data);
}
loggedIn() {
  return localStorage.getItem('token');
}
}
