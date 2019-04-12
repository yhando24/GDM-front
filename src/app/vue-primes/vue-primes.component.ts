import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MissionService } from 'src/services/mission.service';
import { Mission, IMission } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IGraphMission {
  date: Date,
  prime: number,
}

export class GraphMission implements IGraphMission {
  public constructor(public date: Date, public prime: number) {
    this.date = date;
    this.prime = prime;
  }

  public getDate(): Date {
    return this.date;
  }
}

@Component({
  selector: 'app-vue-primes',
  templateUrl: './vue-primes.component.html',
  styleUrls: ['./vue-primes.component.css']
})
export class VuePrimesComponent implements OnInit {
  listeMissions: IMission[];
  idUser: number;
  chart: any;

  constructor(private serviceMission: MissionService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.idUser = Number(this.route.snapshot.paramMap.get('idUser'));
    this.serviceMission.findPrimeMissionByUser().subscribe(values => {
      this.listeMissions = values;
      const tmp: GraphMission[] = [];
      values.forEach(m => {
        const source = new GraphMission(m.startDate, m.prime);
        tmp.push(source);
      });
      this.initChart(tmp);
    });
  }

  initChart(primes: GraphMission[]) {

    const labelsMois = ['Janvier', 'Février', 'Mars', 'Avril',
    'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


    const tab: number[] = [];
    for (let i = 0; i < 12; i++) {
      tab[i] = 0;
    }

    primes.forEach(e => tab [new Date(e.date).getMonth()] = e.prime);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labelsMois,
        datasets:
          [
            {
              data: tab,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            },
          ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }
}
