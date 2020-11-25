import {Component, EventEmitter, Input, Output } from '@angular/core';
import {NgbDateStruct, NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {TaskDataService} from '../task-data.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})


export class DatepickerComponent {
  model: NgbDateStruct;
  constructor(
    private taskDataService: TaskDataService
  ) { }
  addNewItem(value: any): void {
    const format = this.model.month + '/' + this.model.day + '/' + this.model.year;
    let data = {
      dueDate: format
    };
    this.taskDataService.updateData(data);
  }
}
