import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentOutputComponent } from './child-to-parent-output.component';

describe('ChildToParentOutputComponent', () => {
  let component: ChildToParentOutputComponent;
  let fixture: ComponentFixture<ChildToParentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildToParentOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
