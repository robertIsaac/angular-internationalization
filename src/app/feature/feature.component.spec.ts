import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureComponent]
    });
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
