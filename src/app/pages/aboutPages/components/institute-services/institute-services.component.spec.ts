import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteServicesComponent } from './institute-services.component';

describe('InstituteServicesComponent', () => {
  let component: InstituteServicesComponent;
  let fixture: ComponentFixture<InstituteServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InstituteServicesComponent]
    });
    fixture = TestBed.createComponent(InstituteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
