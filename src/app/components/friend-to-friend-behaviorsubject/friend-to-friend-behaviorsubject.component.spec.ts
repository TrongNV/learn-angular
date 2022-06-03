import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendToFriendBehaviorsubjectComponent } from './friend-to-friend-behaviorsubject.component';

describe('FriendToFriendBehaviorsubjectComponent', () => {
  let component: FriendToFriendBehaviorsubjectComponent;
  let fixture: ComponentFixture<FriendToFriendBehaviorsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendToFriendBehaviorsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendToFriendBehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
