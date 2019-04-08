import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteNatureComponent } from './modal-delete-nature.component';

describe('ModalDeleteNatureComponent', () => {
  let component: ModalDeleteNatureComponent;
  let fixture: ComponentFixture<ModalDeleteNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
