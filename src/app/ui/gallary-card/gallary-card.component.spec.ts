import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryCardComponent } from './gallary-card.component';

describe('GallaryCardComponent', () => {
  let component: GallaryCardComponent;
  let fixture: ComponentFixture<GallaryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallaryCardComponent]
    });
    fixture = TestBed.createComponent(GallaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
