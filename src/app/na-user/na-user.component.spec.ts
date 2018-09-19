import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaUserComponent } from './na-user.component';

describe('NaUserComponent', () => {
  let component: NaUserComponent;
  let fixture: ComponentFixture<NaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
