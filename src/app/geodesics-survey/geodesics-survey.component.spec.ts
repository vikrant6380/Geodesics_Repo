import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeodesicsSurveyComponent } from './geodesics-survey.component';

describe('GeodesicsSurveyComponent', () => {
  let component: GeodesicsSurveyComponent;
  let fixture: ComponentFixture<GeodesicsSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeodesicsSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeodesicsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
