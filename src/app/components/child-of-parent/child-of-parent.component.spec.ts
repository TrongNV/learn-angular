import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfParentComponent } from './child-of-parent.component';

describe('ChildOfParentComponent', () => {
  let component: ChildOfParentComponent;
  let fixture: ComponentFixture<ChildOfParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOfParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
