import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { onErrorResumeNext } from 'rxjs';
//import { UserService} from './user.service';
@Injectable({
providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

constructor(private injector: Injector) { }
intercept(request: HttpRequest<any> , next: HttpHandler) {
const token = localStorage.getItem('token');
//const httpService = this.injector.get(UserService);
const requ = this.addtoken(request, token);
// localStorage.token = token;
return next.handle(requ);
}
private addtoken(request: HttpRequest<any>, token: string) {
return request.clone(
{
setHeaders: {
Authorization: `Bearer ${token}`
}

});
}
}