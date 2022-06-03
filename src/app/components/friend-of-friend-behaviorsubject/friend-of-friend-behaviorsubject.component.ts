import { Component, OnInit } from '@angular/core';
import { messageOnArray } from 'src/app/randmon/random';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-friend-of-friend-behaviorsubject',
  templateUrl: './friend-of-friend-behaviorsubject.component.html',
  styleUrls: ['./friend-of-friend-behaviorsubject.component.css'],
})
export class FriendOfFriendBehaviorsubjectComponent implements OnInit {
  messageArray: string[] = ['angular', 'nodejs', 'reactjs', 'mongodb'];
  message: string | null = null;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }

  newCourse() {
    this.data.changeMessage(messageOnArray(this.messageArray));
  }
}
