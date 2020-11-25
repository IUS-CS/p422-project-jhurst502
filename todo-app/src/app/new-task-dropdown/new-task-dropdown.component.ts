import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task-dropdown',
  templateUrl: './new-task-dropdown.component.html',
  styleUrls: ['./new-task-dropdown.component.scss']
})
export class NewTaskDropdownComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
