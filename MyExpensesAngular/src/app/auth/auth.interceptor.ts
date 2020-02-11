import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('myExpensesToken') != null) {
      const clonedReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('myExpensesToken'))
      });
      return next.handle(clonedReq).pipe(
        tap(
          success => { },
          err => {
            if (err.status === 401) {
                localStorage.removeItem('myExpensesToken');
                this.router.navigateByUrl('/user/login');
            }
          }
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }
}
