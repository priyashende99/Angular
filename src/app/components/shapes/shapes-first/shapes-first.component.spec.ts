import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesFirstComponent } from './shapes-first.component';

describe('ShapesFirstComponent', () => {
  let component: ShapesFirstComponent;
  let fixture: ComponentFixture<ShapesFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapesFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapesFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
