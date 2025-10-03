import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedNavbarLinksComponent } from './fixed-navbar-links.component';

describe('FixedNavbarLinksComponent', () => {
  let component: FixedNavbarLinksComponent;
  let fixture: ComponentFixture<FixedNavbarLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedNavbarLinksComponent]
    });
    fixture = TestBed.createComponent(FixedNavbarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
