import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MissionService } from 'src/services/mission.service';
import { Mission, IMission } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-vue-primes',
  templateUrl: './vue-primes.component.html',
  styleUrls: ['./vue-primes.component.css']
})
export class VuePrimesComponent implements OnInit {
  listeMissions: IMission[];
  idUser: number;
  chart: Chart;

  constructor(private serviceMission: MissionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idUser = Number(this.route.snapshot.paramMap.get('idUser'));
    this.serviceMission.findPrimeMissionByUser(this.idUser).subscribe(values => {
      this.listeMissions = values;
      const tmp: number[] = [];
      values.forEach(m => {
        tmp.push(m.prime);
      });
      this.initChart(tmp);
    });
  }

  initChart(primes) {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        datasets: [
          {
            data: primes,//[350, 250, 400],
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
