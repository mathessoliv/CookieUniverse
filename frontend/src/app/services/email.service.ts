import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../model/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  enviarEmail(email: Email): Observable<any> {
    return this.http.post("http://localhost:3000/api/email", email, { responseType: 'text' });
  }
}
