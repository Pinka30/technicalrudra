import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmobilesComponent } from './topmobiles.component';

describe('TopmobilesComponent', () => {
  let component: TopmobilesComponent;
  let fixture: ComponentFixture<TopmobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
