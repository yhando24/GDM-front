import { Injectable } from '@angular/core';
import { ModelMissionCalendar, Mission } from 'src/app/models';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MissionService } from 'src/services/mission.service';
import { Observable, from, of } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CalendarMissionResolver implements Resolve<Mission[]> {

  URL_BACKEND = environment.backendUrl + 'missions';
  constructor(private ms: MissionService) {}
  missions: ModelMissionCalendar[] = [];
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mission []> | Promise<Mission[]> | Mission []{
      return this.ms.finAllMissionByUser();
   }
  }

