import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILogin } from '../../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  loggedUser: string;

  constructor(private httpClient: HttpClient) {
    this.IsloggedUser();
  }

  IsloggedUser() {
    this.loggedUser = localStorage.getItem('loggedUser');
    if (localStorage.getItem('loggedUser') !== null) this.isLoggedIn.next(true);
  }

  login(email: string, password: string): Observable<ILogin> {
    return this.httpClient.post<ILogin>(`${environment.API_base}auth/login`, {
      email: email,
      password: password
    })
  }

  logout() {
    this.isLoggedIn.next(false);
    this.loggedUser = '';
    localStorage.clear();
    this.redirectUrl = '/auth/login';
  }
}
