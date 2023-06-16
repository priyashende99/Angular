import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesSecondComponent } from './shapes-second.component';

describe('ShapesSecondComponent', () => {
  let component: ShapesSecondComponent;
  let fixture: ComponentFixture<ShapesSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapesSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapesSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
