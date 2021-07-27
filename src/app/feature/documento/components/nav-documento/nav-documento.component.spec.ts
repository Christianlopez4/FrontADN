import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDocumentoComponent } from './nav-documento.component';

describe('NavDocumentoComponent', () => {
  let component: NavDocumentoComponent;
  let fixture: ComponentFixture<NavDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
