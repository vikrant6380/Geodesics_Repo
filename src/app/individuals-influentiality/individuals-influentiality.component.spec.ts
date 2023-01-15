import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualsInfluentialityComponent } from './individuals-influentiality.component';

describe('IndividualsInfluentialityComponent', () => {
  let component: IndividualsInfluentialityComponent;
  let fixture: ComponentFixture<IndividualsInfluentialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualsInfluentialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualsInfluentialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
