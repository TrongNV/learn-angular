import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentViewchildComponent } from './child-to-parent-viewchild.component';

describe('ChildToParentViewchildComponent', () => {
  let component: ChildToParentViewchildComponent;
  let fixture: ComponentFixture<ChildToParentViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildToParentViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
