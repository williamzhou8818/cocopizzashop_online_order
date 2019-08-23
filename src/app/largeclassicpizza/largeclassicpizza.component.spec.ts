import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeclassicpizzaComponent } from './largeclassicpizza.component';

describe('LargeclassicpizzaComponent', () => {
  let component: LargeclassicpizzaComponent;
  let fixture: ComponentFixture<LargeclassicpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeclassicpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeclassicpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
