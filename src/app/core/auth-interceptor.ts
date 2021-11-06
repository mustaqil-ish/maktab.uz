import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', "Bearer " + authToken ?? "")
      });// send cloned request with header to the next handler.
      return next.handle(authReq);
    }
    return next.handle(req);

  }
}