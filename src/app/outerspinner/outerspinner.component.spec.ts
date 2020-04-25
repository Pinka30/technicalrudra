import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterspinnerComponent } from './outerspinner.component';

describe('OuterspinnerComponent', () => {
  let component: OuterspinnerComponent;
  let fixture: ComponentFixture<OuterspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
