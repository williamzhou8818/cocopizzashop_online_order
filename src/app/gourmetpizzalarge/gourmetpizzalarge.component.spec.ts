import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GourmetpizzalargeComponent } from './gourmetpizzalarge.component';

describe('GourmetpizzalargeComponent', () => {
  let component: GourmetpizzalargeComponent;
  let fixture: ComponentFixture<GourmetpizzalargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GourmetpizzalargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GourmetpizzalargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
