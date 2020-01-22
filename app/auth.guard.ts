import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService} from './user.service';
@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if (this.userService.loggedIn()) {
console.log('valid user');
return true;
} else {
//this.route.navigate(['/signin']);
console.log('invalid user');
return false;
}
}
constructor(private userService: UserService, private route: Router) { }
}