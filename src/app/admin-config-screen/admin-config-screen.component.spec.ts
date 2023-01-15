import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfigScreenComponent } from './admin-config-screen.component';

describe('AdminConfigScreenComponent', () => {
  let component: AdminConfigScreenComponent;
  let fixture: ComponentFixture<AdminConfigScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConfigScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConfigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
