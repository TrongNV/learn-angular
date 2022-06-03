import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { makeid, messageOnArray } from 'src/app/randmon/random';

@Component({
  selector: 'app-child-of-parent-output',
  templateUrl: './child-of-parent-output.component.html',
  styleUrls: ['./child-of-parent-output.component.css']
})
export class ChildOfParentOutputComponent implements OnInit {
  messageArray: string[] = ['child', 'parent', 'friend'];
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(messageOnArray(this.messageArray));
  }

}
