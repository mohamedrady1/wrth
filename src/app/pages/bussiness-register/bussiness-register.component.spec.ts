import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessRegisterComponent } from './bussiness-register.component';

describe('BussinessRegisterComponent', () => {
  let component: BussinessRegisterComponent;
  let fixture: ComponentFixture<BussinessRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessRegisterComponent]
    });
    fixture = TestBed.createComponent(BussinessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
