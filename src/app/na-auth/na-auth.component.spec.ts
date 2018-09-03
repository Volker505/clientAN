import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaAuthComponent } from './na-auth.component';

describe('NaAuthComponent', () => {
  let component: NaAuthComponent;
  let fixture: ComponentFixture<NaAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
