import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-friend-one-of-child',
  templateUrl: './friend-one-of-child.component.html',
  styleUrls: ['./friend-one-of-child.component.css']
})
export class FriendOneOfChildComponent implements OnInit {
  message: string | null = null;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
