import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTermsComponent } from './basic-terms.component';

describe('BasicTermsComponent', () => {
  let component: BasicTermsComponent;
  let fixture: ComponentFixture<BasicTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTermsComponent]
    });
    fixture = TestBed.createComponent(BasicTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
