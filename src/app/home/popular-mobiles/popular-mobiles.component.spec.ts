import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMobilesComponent } from './popular-mobiles.component';

describe('PopularMobilesComponent', () => {
  let component: PopularMobilesComponent;
  let fixture: ComponentFixture<PopularMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
