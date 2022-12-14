import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryfruitDetailsComponent } from './dryfruit-details.component';

describe('DryfruitDetailsComponent', () => {
  let component: DryfruitDetailsComponent;
  let fixture: ComponentFixture<DryfruitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryfruitDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryfruitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
