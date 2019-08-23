import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GourmetpizzasmallComponent } from './gourmetpizzasmall.component';

describe('GourmetpizzasmallComponent', () => {
  let component: GourmetpizzasmallComponent;
  let fixture: ComponentFixture<GourmetpizzasmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GourmetpizzasmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GourmetpizzasmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
