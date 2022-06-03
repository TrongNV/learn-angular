import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-of-parent-viewchild',
  templateUrl: './child-of-parent-viewchild.component.html',
  styleUrls: ['./child-of-parent-viewchild.component.css'],
})
export class ChildOfParentViewchildComponent implements OnInit {
  message: string | null = 'Hola Mundo!';
  constructor() {}

  ngOnInit(): void {}
}
