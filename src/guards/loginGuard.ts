import { AuthServiceService } from 'src/services/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class loginGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthServiceService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
    // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login
      return !this.auth.isAuthenticated || this.router.parseUrl('/accueil');
  }
}
