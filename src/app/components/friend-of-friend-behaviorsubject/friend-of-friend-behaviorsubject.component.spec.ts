import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendOfFriendBehaviorsubjectComponent } from './friend-of-friend-behaviorsubject.component';

describe('FriendOfFriendBehaviorsubjectComponent', () => {
  let component: FriendOfFriendBehaviorsubjectComponent;
  let fixture: ComponentFixture<FriendOfFriendBehaviorsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendOfFriendBehaviorsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendOfFriendBehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
