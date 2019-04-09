import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateNatureComponent } from './modal-update-nature.component';

describe('ModalUpdateNatureComponent', () => {
  let component: ModalUpdateNatureComponent;
  let fixture: ComponentFixture<ModalUpdateNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
