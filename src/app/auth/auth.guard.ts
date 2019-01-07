import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service'
@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate {

    constructor( private authenticationService: AuthenticationService, private router: Router) { }

    async canActivate(
        next : ActivatedRouteSnapshot,
        state : RouterStateSnapshot) {
            if (!await this.authenticationService.isloggedIn()) {
                this.router.navigate(['/signin']);
            }
            else return true;
        }
}