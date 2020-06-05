import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Injectable, Injector } from "@angular/core";
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private authService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          if (error.status == 0) {
            // connectionError
            console.log("connectionError");
          }

          if (error.status === 401 && !error.error.title.includes('Or')) {
            console.log('heeeeor');
            this.authService.refreshToken().subscribe(d => {
              console.log('yes', d)
            })
          }
        }
        console.log(errorMessage);
        return throwError(error.error);
      })
    );
  }
}
