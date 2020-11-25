import {Component, OnInit} from '@angular/core';
import {TaskDataService} from '../task-data.service';

@Component({
  selector: 'app-new-task-dropdown',
  templateUrl: './new-task-dropdown.component.html',
  styleUrls: ['./new-task-dropdown.component.scss']
})
export class NewTaskDropdownComponent implements OnInit {
  constructor(private taskDataService: TaskDataService) { }
  public isCollapsed = false;

  parentEventHandlerFunction(valueEmitted: boolean): void {
    this.isCollapsed = valueEmitted;
    console.log(this.isCollapsed);
  }

  ngOnInit(): void {
  }

}
