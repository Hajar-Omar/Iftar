import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISetting } from '../../interfaces/setting';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getSettings(): Observable<ISetting> {
    return this.httpClient.get<ISetting>(`${environment.API_base}setting`);
  }
}
