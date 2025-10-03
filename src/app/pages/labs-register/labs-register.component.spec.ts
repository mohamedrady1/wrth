import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsRegisterComponent } from './labs-register.component';

describe('LabsRegisterComponent', () => {
  let component: LabsRegisterComponent;
  let fixture: ComponentFixture<LabsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabsRegisterComponent]
    });
    fixture = TestBed.createComponent(LabsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
