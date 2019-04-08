import { Component, OnInit } from '@angular/core';
import { Kind } from '../models';
import { KindService } from 'src/services/kind.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete-nature',
  templateUrl: './modal-delete-nature.component.html',
  styleUrls: ['./modal-delete-nature.component.css']
})
export class ModalDeleteNatureComponent implements OnInit {

  oneKind: Kind;

  constructor(private data: KindService, private router: Router) { }

  ngOnInit() {

    this.data.oneKind.subscribe(kind => {
      this.oneKind = kind;
    });
  }

  close() {
    this.data.closeModal();
  }

  delete() {
    this.data.deleteKind(this.oneKind.id).subscribe(
      () => this.data.kindDeleted(this.oneKind),
      error => this.data.kindNotDeleted(error.error)
    );
    this.data.closeModal();

  }

}
