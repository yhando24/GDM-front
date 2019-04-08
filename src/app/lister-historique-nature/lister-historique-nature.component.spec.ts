import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerHistoriqueNatureComponent } from './lister-historique-nature.component';

describe('ListerHistoriqueNatureComponent', () => {
  let component: ListerHistoriqueNatureComponent;
  let fixture: ComponentFixture<ListerHistoriqueNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerHistoriqueNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerHistoriqueNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
