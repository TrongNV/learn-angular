import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-friend-to-friend-behaviorsubject',
  templateUrl: './friend-to-friend-behaviorsubject.component.html',
  styleUrls: ['./friend-to-friend-behaviorsubject.component.css'],
})
export class FriendToFriendBehaviorsubjectComponent implements OnInit {
  message: string | null = null;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
