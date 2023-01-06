import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public route: ActivatedRouteSnapshot, state: RouterStateSnapshot, protected router: Router) { }

    canActivate() {
        let name = this.route.data['name'] as string;
        if (name !== 'gsearch') {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
