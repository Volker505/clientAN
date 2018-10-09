import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaChatComponent } from './na-chat.component';

describe('NaChatComponent', () => {
  let component: NaChatComponent;
  let fixture: ComponentFixture<NaChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
