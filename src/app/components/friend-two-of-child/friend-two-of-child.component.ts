import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-friend-two-of-child',
  templateUrl: './friend-two-of-child.component.html',
  styleUrls: ['./friend-two-of-child.component.css'],
})
export class FriendTwoOfChildComponent implements OnInit {
  message: string | null = null;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}
