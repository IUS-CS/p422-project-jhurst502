import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskDataService} from '../task-data.service';

@Component({
  selector: 'app-new-task-dropdown',
  templateUrl: './new-task-dropdown.component.html',
  styleUrls: ['./new-task-dropdown.component.scss']
})
export class NewTaskDropdownComponent implements OnInit {
  @Output() newTask = new EventEmitter<boolean>();
  constructor(private taskDataService: TaskDataService) { }
  public isCollapsed = false;

  parentEventHandlerFunction(valueEmitted: boolean): void {
    this.newTask.emit(this.isCollapsed);
    this.isCollapsed = valueEmitted;
    console.log(this.isCollapsed);
  }

  ngOnInit(): void {
    this.isCollapsed = true;
  }

}
