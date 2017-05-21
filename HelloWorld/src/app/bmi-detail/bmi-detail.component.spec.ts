import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDetailComponent } from './bmi-detail.component';

describe('BmiDetailComponent', () => {
  let component: BmiDetailComponent;
  let fixture: ComponentFixture<BmiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
