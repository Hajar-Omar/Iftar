import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ILogin } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  loggedUser: string;

  constructor(private httpClient: HttpClient) {
    this.IsloggedUser();
  }

  IsloggedUser() {
    this.loggedUser = localStorage.getItem('loggedUser');
    if (localStorage.getItem('loggedUser') !== undefined) this.isLoggedIn = true;
  }

  login(email: string, password: string): Observable<ILogin> {
    return this.httpClient.post<ILogin>(`${environment.API_base}auth/login`, {
      email: email,
      password: password
    })
  }

  logout() {
    this.isLoggedIn = false;
    this.loggedUser = ''
    localStorage.clear()
    this.redirectUrl = '/auth/login'
  }
}
