import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendOneOfChildComponent } from './friend-one-of-child.component';

describe('FriendOneOfChildComponent', () => {
  let component: FriendOneOfChildComponent;
  let fixture: ComponentFixture<FriendOneOfChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendOneOfChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendOneOfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
