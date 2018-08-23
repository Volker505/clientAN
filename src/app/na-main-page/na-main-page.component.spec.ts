import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaMainPageComponent } from './na-main-page.component';

describe('NaMainPageComponent', () => {
  let component: NaMainPageComponent;
  let fixture: ComponentFixture<NaMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
