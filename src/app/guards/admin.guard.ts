import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';

import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login
    return false || this.router.parseUrl('/accueil');
  }
}
