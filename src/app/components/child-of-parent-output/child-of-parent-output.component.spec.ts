import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfParentOutputComponent } from './child-of-parent-output.component';

describe('ChildOfParentOutputComponent', () => {
  let component: ChildOfParentOutputComponent;
  let fixture: ComponentFixture<ChildOfParentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOfParentOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
