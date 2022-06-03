import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendTwoOfChildComponent } from './friend-two-of-child.component';

describe('FriendTwoOfChildComponent', () => {
  let component: FriendTwoOfChildComponent;
  let fixture: ComponentFixture<FriendTwoOfChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendTwoOfChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendTwoOfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
