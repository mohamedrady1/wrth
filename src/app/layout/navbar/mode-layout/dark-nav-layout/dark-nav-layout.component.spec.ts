import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkNavLayoutComponent } from './dark-nav-layout.component';

describe('DarkNavLayoutComponent', () => {
  let component: DarkNavLayoutComponent;
  let fixture: ComponentFixture<DarkNavLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkNavLayoutComponent]
    });
    fixture = TestBed.createComponent(DarkNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
