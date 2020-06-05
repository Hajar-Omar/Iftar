import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILogin, IAccount } from '../../interfaces/login';
import { IRegister } from '../../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  loggedUser: string;
  account: string;

  constructor(private httpClient: HttpClient) {
    this.IsloggedUser();
  }

  IsloggedUser() {
    this.loggedUser = localStorage.getItem('loggedUser');
    this.account = localStorage.getItem('account');
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
    this.account = '';
    localStorage.clear();
    this.redirectUrl = '/auth/login';
  }

  register(formData: IRegister): Observable<ILogin> {
    return this.httpClient.post<ILogin>(`${environment.API_base}auth/register`, {
      name: formData.fullName,
      email: formData.corporateEmail,
      company: formData.company,
      title: formData.title,
      country: formData.city, phone: formData.mobileNumber,
      keep_updated: formData.keep_updated, password: formData.password
    })
  }

  getUserAccount(): Observable<IAccount> {
    return this.httpClient.get<IAccount>(`${environment.API_base}account/me`)
  }

  refreshToken(): Observable<ILogin> {
    return this.httpClient.post<ILogin>(`${environment.API_base}auth/refresh`, null)
  }

  updateAccount(formData: IRegister): Observable<IAccount> {
    return this.httpClient.post<IAccount>(`${environment.API_base}account/update`, {
      name: formData.fullName,
      email: formData.corporateEmail,
      company: formData.company,
      title: formData.title,
      country: formData.city,
      phone: formData.mobileNumber,
    })
  }
}
