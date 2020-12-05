import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMeliComponent } from './navbar-meli.component';

describe('NavbarMeliComponent', () => {
  let component: NavbarMeliComponent;
  let fixture: ComponentFixture<NavbarMeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
