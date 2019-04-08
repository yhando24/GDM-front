import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthServiceService } from 'src/services/auth-service.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthServiceService, private router: Router) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");

    if (idToken !== undefined && idToken !== null) {

      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          'Bearer ' + idToken)
      });

      return next.handle(cloned);
    } else {

      this.router.navigateByUrl('/login');
      return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
        // Auto logout if 401 response returned from api

        return throwError(error);
      }));
    }
  }
}
