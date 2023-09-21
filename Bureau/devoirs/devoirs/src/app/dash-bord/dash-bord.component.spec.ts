import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordComponent } from './dash-bord.component';

describe('DashBordComponent', () => {
  let component: DashBordComponent;
  let fixture: ComponentFixture<DashBordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBordComponent]
    });
    fixture = TestBed.createComponent(DashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
