import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {
  listeUsers;
  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.finAllUser()
       .subscribe(arg => this.listeUsers = arg);
  }
  delete() {
    console.log('plop');
  }
}
