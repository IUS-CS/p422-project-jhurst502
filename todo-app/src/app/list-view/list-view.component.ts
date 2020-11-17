import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { TaskDataService } from '../task-data.service';
import { Task } from '../models/task';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  tasks: Observable<Task>;
  taskName: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskDataService
  ) { }

  ngOnInit(): void {
    //maybe change to for loop of each task??
    this.tasks = this.taskService.getAll();
  }
}
