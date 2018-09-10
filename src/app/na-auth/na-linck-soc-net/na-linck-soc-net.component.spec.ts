import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaLinckSocNetComponent } from './na-linck-soc-net.component';

describe('NaLinckSocNetComponent', () => {
  let component: NaLinckSocNetComponent;
  let fixture: ComponentFixture<NaLinckSocNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaLinckSocNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaLinckSocNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
