import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(obj:any) {
    return this.http.post('http://localhost:8000/auth/login', obj); 
  }
}
