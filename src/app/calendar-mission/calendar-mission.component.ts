import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ModelMissionCalendar, Mission } from '../models';
import { Subscription } from 'rxjs';
import { MissionService } from 'src/services/mission.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calendar-mission',
  templateUrl: './calendar-mission.component.html',
  styleUrls: ['./calendar-mission.component.css']
})

export class CalendarMissionComponent implements OnInit {
  missions: Array<ModelMissionCalendar>;
  mission: ModelMissionCalendar;
  missionsClassique: Mission[] = [];
  actionSub: Subscription;
  ngOnInit() {

    this.route.data.subscribe(data => this.missionsClassique = data['missions']);

    console.log(this.missionsClassique[0].id)
    const tmp = [];
    this.missionsClassique.forEach(m => {
      const mission = new ModelMissionCalendar(m.id, m.startDate, m.endDate, m.kind.name);
      tmp.push(mission)
    });
    this.missions = tmp;


    //console.log(this.missions[0].id + 'hello')
  }
  displayEvent: any;
  calendarOptions: OptionsInput;
  calendarPlugins = [dayGridPlugin]

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private data: MissionService, private route: ActivatedRoute) {

  }
  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}
