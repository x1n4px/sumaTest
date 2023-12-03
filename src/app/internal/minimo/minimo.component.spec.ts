import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimoComponent } from './minimo.component';

describe('MinimoComponent', () => {
  let component: MinimoComponent;
  let fixture: ComponentFixture<MinimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimoComponent]
    });
    fixture = TestBed.createComponent(MinimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
