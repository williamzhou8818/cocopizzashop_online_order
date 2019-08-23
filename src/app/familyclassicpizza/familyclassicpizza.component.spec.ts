import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyclassicpizzaComponent } from './familyclassicpizza.component';

describe('FamilyclassicpizzaComponent', () => {
  let component: FamilyclassicpizzaComponent;
  let fixture: ComponentFixture<FamilyclassicpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyclassicpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyclassicpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
