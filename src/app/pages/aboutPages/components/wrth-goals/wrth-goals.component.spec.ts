import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrthGoalsComponent } from './wrth-goals.component';

describe('WrthGoalsComponent', () => {
  let component: WrthGoalsComponent;
  let fixture: ComponentFixture<WrthGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrthGoalsComponent]
    });
    fixture = TestBed.createComponent(WrthGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
