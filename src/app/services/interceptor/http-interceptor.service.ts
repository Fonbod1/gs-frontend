import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip login & change password
    if (req.url.includes('/authenticate') || req.url.includes('/changerMotDePasse')) {
      return next.handle(req);
    }

    const storedUser = localStorage.getItem('accessToken');
    if (storedUser) {
      try {
        const authResp = JSON.parse(storedUser);
        const token = authResp?.accessToken;
        if (token) {
          const authReq = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          });
          return next.handle(authReq);
        }
      } catch (e) {
        console.warn('Failed to parse stored accessToken', e);
      }
    }

    return next.handle(req);
  }
}
