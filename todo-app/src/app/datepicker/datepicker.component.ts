import {Component, EventEmitter, Input, Output } from '@angular/core';
import {NgbDateStruct, NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {TaskDataService} from '../task-data.service';
import {templateJitUrl} from "@angular/compiler";

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
    let monthAsString: string;
    switch (this.model.month) {
      case 1:
        monthAsString = 'January';
        break;
      case 2:
        monthAsString = 'February';
        break;
      case 3:
        monthAsString = 'March';
        break;
      case 4:
        monthAsString = 'April';
        break;
      case 5:
        monthAsString = 'May';
        break;
      case 6:
        monthAsString = 'June';
        break;
      case 7:
        monthAsString = 'July';
        break;
      case 8:
        monthAsString = 'August';
        break;
      case 9:
        monthAsString = 'September';
        break;
      case 10:
        monthAsString = 'October';
        break;
      case 11:
        monthAsString = 'November';
        break;
      case 12:
        monthAsString = 'December';
        break;
    }
    let data = {
      dueDate: {
        day: this.model.day,
        month: monthAsString,
        year: this.model.year
      }
    };
    this.taskDataService.updateData(data);
  }
}
