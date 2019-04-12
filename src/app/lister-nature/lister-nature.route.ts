import { Injectable, Component } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Kind } from '../models';
import { KindService } from 'src/services/kind.service';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-lister-nature',
  templateUrl: './lister-nature.component.html',
  styleUrls: ['./lister-nature.component.css']
})

@Injectable({ providedIn: 'root' })
export class KindsResolver implements Resolve<Kind[]> {
  constructor(private kinds: KindService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.kinds.findActive().pipe(map((kind: HttpResponse<Kind[]>) => kind.body));

  }
}

