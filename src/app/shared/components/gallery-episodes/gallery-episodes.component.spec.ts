import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEpisodesComponent } from './gallery-episodes.component';

describe('GalleryEpisodesComponent', () => {
  let component: GalleryEpisodesComponent;
  let fixture: ComponentFixture<GalleryEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryEpisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
