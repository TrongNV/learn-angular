import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-output',
  templateUrl: './child-to-parent-output.component.html',
  styleUrls: ['./child-to-parent-output.component.css'],
})
export class ChildToParentOutputComponent implements OnInit {
  message: string | null = null;
  constructor() {}

  ngOnInit(): void {}

  receiveMessage($event: string) {
    this.message = $event;
  }
}
