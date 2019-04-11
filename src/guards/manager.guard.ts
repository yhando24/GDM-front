import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';

import { CanActivate } from '@angular/router/src/utils/preactivation';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  role;
  constructor(private router: Router) {
    const helper = new JwtHelperService();
    const idToken = localStorage.getItem('id_token');
    this.role = helper.decodeToken(idToken).auth;
  }

  canActivate(): boolean | UrlTree {

    return this.role.toUpperCase() === 'MANAGER' || this.router.parseUrl('/accueil');
  }
}
