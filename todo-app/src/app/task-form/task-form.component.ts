import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TaskDataService} from '../task-data.service';
import {Observable} from 'rxjs';
import { Task } from '../models/task';
import {FormControl, FormGroup} from '@angular/forms';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {
  @Output() collapsed = new EventEmitter<boolean>();
  task: Observable<Task>;
  items = [];
  model = new FormGroup({
    name: new FormControl(''),
    urgency: new FormControl(0)
  });
  name: string;
  urgency: number;
  status = '';
  statusIsError = false;

  addItem(newItem: any): void{
    this.items.push(newItem);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskDataService: TaskDataService
  ) { }

  ngOnInit(): void {
  }

  addNewItem(value: any): void {
    let data = {
      name: this.model.value.name,
      urgency: this.model.value.urgency
    };
    this.taskDataService.updateData(data);
  }

  addTask(): void {
    this.collapsed.emit(true);
    console.log(this.taskDataService.getData());

    // save to DB
    const newData = this.taskDataService.getData();
    const task = new Task(
      newData.name,
      newData.dueDate,
      newData.urgency
    );
    this.taskDataService.addTask(this.name, task)
      .subscribe(
        next => {
          this.status = 'Saved!';
          this.statusIsError = false;
        },
        err => {
          this.status = err;
          this.statusIsError = true;
        }
      );
  }
}
