import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GourmetpizzafamilyComponent } from './gourmetpizzafamily.component';

describe('GourmetpizzafamilyComponent', () => {
  let component: GourmetpizzafamilyComponent;
  let fixture: ComponentFixture<GourmetpizzafamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GourmetpizzafamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GourmetpizzafamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
