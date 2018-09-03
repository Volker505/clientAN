import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaAuthSocNetComponent } from './na-auth-soc-net.component';

describe('NaAuthSocNetComponent', () => {
  let component: NaAuthSocNetComponent;
  let fixture: ComponentFixture<NaAuthSocNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaAuthSocNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaAuthSocNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
