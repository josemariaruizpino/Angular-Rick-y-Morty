import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLocationsComponent } from './gallery-locations.component';

describe('GalleryLocationsComponent', () => {
  let component: GalleryLocationsComponent;
  let fixture: ComponentFixture<GalleryLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
