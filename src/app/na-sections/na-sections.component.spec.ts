import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaSectionsComponent } from './na-sections.component';

describe('NaSectionsComponent', () => {
  let component: NaSectionsComponent;
  let fixture: ComponentFixture<NaSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
