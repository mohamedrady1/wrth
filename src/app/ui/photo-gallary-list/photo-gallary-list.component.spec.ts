import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGallaryListComponent } from './photo-gallary-list.component';

describe('PhotoGallaryListComponent', () => {
  let component: PhotoGallaryListComponent;
  let fixture: ComponentFixture<PhotoGallaryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoGallaryListComponent]
    });
    fixture = TestBed.createComponent(PhotoGallaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
