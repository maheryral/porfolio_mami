import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageproComponent } from './imagepro.component';

describe('ImageproComponent', () => {
  let component: ImageproComponent;
  let fixture: ComponentFixture<ImageproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageproComponent]
    });
    fixture = TestBed.createComponent(ImageproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
