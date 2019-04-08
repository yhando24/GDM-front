import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerUserComponent } from './lister-user.component';

describe('ListerUserComponent', () => {
  let component: ListerUserComponent;
  let fixture: ComponentFixture<ListerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ ListerUserComponent ]
    })
    .compileComponents();
=======
      declarations: [ListerUserComponent]
    })
      .compileComponents();
>>>>>>> 87eeb7d98f4bde745450c878ae1667ba2d065dcc
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
