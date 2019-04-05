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
    console.log('Interceptor');
    console.log(idToken);
    if (idToken !== undefined && idToken !== null) {
      console.log('j"ai quelque chose');
      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned);
    } else {
      console.log('QUE DALLE');
      this.router.navigateByUrl('/login');
      return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
        // Auto logout if 401 response returned from api
        if (error.status === 401) {
          console.log('erreur 401');
          this.auth.isLoggedOut();
        }
        return throwError(error);
      }));
    }
  }
}
