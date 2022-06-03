import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfParentViewchildComponent } from './child-of-parent-viewchild.component';

describe('ChildOfParentViewchildComponent', () => {
  let component: ChildOfParentViewchildComponent;
  let fixture: ComponentFixture<ChildOfParentViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOfParentViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfParentViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
