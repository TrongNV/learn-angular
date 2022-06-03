import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-of-parent',
  templateUrl: './child-of-parent.component.html',
  styleUrls: ['./child-of-parent.component.css']
})
export class ChildOfParentComponent implements OnInit {
  @Input() childMessage: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
