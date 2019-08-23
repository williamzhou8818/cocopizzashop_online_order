import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallclassicpizzaComponent } from './smallclassicpizza.component';

describe('SmallclassicpizzaComponent', () => {
  let component: SmallclassicpizzaComponent;
  let fixture: ComponentFixture<SmallclassicpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallclassicpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallclassicpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
