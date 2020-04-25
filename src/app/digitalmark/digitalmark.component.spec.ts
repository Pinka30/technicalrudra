import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarkComponent } from './digitalmark.component';

describe('DigitalmarkComponent', () => {
  let component: DigitalmarkComponent;
  let fixture: ComponentFixture<DigitalmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
