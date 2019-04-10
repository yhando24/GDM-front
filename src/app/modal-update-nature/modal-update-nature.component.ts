import { Component, OnInit } from '@angular/core';
import { Kind } from '../models';
import { KindService } from 'src/services/kind.service';

@Component({
  selector: 'app-modal-update-nature',
  templateUrl: './modal-update-nature.component.html',
  styleUrls: ['./modal-update-nature.component.css']
})
export class ModalUpdateNatureComponent implements OnInit {

  oneKind: Kind;

  constructor(private data: KindService) { }

  ngOnInit() {
    this.data.oneKind.subscribe(kind => this.oneKind = kind);
  }

  close() {
    this.data.closeModal();
  }

  submit() {
    this.data.updateKind(this.oneKind).subscribe(
      kind => this.data.kindUpdated(kind),
      error => console.log(error.error)
    );
    this.data.closeModal();
  }
}
