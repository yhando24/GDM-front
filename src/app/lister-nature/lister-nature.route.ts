import { Injectable, Component } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Kind } from '../models';

import { KindService } from 'src/services/kind.service';

@Component({
  selector: 'app-lister-nature',
  templateUrl: './lister-nature.component.html',
  styleUrls: ['./lister-nature.component.css']
})
@Injectable()
export class KindsResolver implements Resolve<Kind[]> {
  constructor(private kinds: KindService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = 1
    // TODO méthode de récupération de l'utilisateur
    if (id) {
      return this.kinds.findAllKind();
    }
  }
}
