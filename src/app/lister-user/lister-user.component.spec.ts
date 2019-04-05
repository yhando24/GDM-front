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
>>>>>>> f72cccf96aafbc7a60c270b9a8a12ae1d412b70a
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
