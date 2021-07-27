import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCitaComponent } from './nav-cita.component';

describe('NavCitaComponent', () => {
  let component: NavCitaComponent;
  let fixture: ComponentFixture<NavCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
