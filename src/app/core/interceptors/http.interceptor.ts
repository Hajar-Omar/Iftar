import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('loggedUser') !== null ? JSON.parse(localStorage.getItem('loggedUser'))['access_token'] : null;

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Authorization': `Bearer ${token}`
      })
    });
    return next.handle(authReq);
  }
}
