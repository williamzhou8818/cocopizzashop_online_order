import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftdrinksComponent } from './softdrinks.component';

describe('SoftdrinksComponent', () => {
  let component: SoftdrinksComponent;
  let fixture: ComponentFixture<SoftdrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftdrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftdrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
