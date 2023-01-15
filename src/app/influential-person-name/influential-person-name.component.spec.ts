import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluentialPersonNameComponent } from './influential-person-name.component';

describe('InfluentialPersonNameComponent', () => {
  let component: InfluentialPersonNameComponent;
  let fixture: ComponentFixture<InfluentialPersonNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluentialPersonNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluentialPersonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
