import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluentialGraphComponent } from './influential-graph.component';

describe('InfluentialGraphComponent', () => {
  let component: InfluentialGraphComponent;
  let fixture: ComponentFixture<InfluentialGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluentialGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluentialGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
