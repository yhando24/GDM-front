import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuePrimesComponent } from './vue-primes.component';

describe('VuePrimesComponent', () => {
  let component: VuePrimesComponent;
  let fixture: ComponentFixture<VuePrimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuePrimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuePrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
