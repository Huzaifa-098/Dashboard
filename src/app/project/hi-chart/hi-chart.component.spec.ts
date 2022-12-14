import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiChartComponent } from './hi-chart.component';

describe('HiChartComponent', () => {
  let component: HiChartComponent;
  let fixture: ComponentFixture<HiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
