import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailsComponent } from './about-details.component';

describe('AboutDetailsComponent', () => {
  let component: AboutDetailsComponent;
  let fixture: ComponentFixture<AboutDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDetailsComponent]
    });
    fixture = TestBed.createComponent(AboutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
