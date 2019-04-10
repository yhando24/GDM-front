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
<<<<<<< HEAD
>>>>>>> f72cccf96aafbc7a60c270b9a8a12ae1d412b70a
=======
>>>>>>> 87eeb7d98f4bde745450c878ae1667ba2d065dcc
>>>>>>> ee93e5bd438664d138b68368f43ec0b5cb1acd83
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
