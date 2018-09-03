import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaRegistrationComponent } from './na-registration.component';

describe('NaRegistrationComponent', () => {
  let component: NaRegistrationComponent;
  let fixture: ComponentFixture<NaRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
