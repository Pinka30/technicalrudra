import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceNtechComponent } from './science-ntech.component';

describe('ScienceNtechComponent', () => {
  let component: ScienceNtechComponent;
  let fixture: ComponentFixture<ScienceNtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceNtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceNtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
