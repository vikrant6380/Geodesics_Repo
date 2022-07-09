import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeodesicsComponent } from './geodesics.component';

describe('GeodesicsComponent', () => {
  let component: GeodesicsComponent;
  let fixture: ComponentFixture<GeodesicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeodesicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeodesicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
