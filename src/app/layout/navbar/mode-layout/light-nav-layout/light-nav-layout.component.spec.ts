import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightNavLayoutComponent } from './light-nav-layout.component';

describe('LightNavLayoutComponent', () => {
  let component: LightNavLayoutComponent;
  let fixture: ComponentFixture<LightNavLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightNavLayoutComponent]
    });
    fixture = TestBed.createComponent(LightNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
