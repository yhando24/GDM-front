import { Injectable } from '@angular/core';
import { ModelMissionCalendar, IMission, Mission } from 'src/app/models';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { MissionService } from 'src/services/mission.service';

@Injectable({ providedIn: 'root' })

export class MissionResolver implements Resolve<Mission> {

    constructor(private service: MissionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['idMission'] ? route.params['idMission'] : null;
        if (id) {
            return this.service.findById(id).pipe(map((mission: Mission) => mission));
        }
        return of(new Mission());
    }
}

