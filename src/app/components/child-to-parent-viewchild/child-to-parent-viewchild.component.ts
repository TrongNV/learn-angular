import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildOfParentViewchildComponent } from '../child-of-parent-viewchild/child-of-parent-viewchild.component';

@Component({
  selector: 'app-child-to-parent-viewchild',
  templateUrl: './child-to-parent-viewchild.component.html',
  styleUrls: ['./child-to-parent-viewchild.component.css'],
})
export class ChildToParentViewchildComponent implements OnInit {
  @ViewChild(ChildOfParentViewchildComponent) child: any;
  parentMessage: string | null = null;

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.parentMessage = this.child?.message;
    }, 0);
  }
  onClickMe() {
    this.parentMessage = this.child?.message;
  }
}
