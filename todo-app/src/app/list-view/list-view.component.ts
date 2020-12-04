import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { TaskDataService } from '../task-data.service';
import { Task } from '../models/task';
import { Profile } from "../models/profile";
import { ProfileDataService } from "../profile-data.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  tasks: Observable<Task>;
  status = '';
  statusIsError = false;
  taskNames: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskDataService,
    private profileService: ProfileDataService
  ) { }
  ngOnInit(): void {
    this.tasks = this.taskService.getAll();
  }
  getTasks(): void {
    this.tasks = this.taskService.getAll();
  }
  delete(taskName: string): void {
    this.taskService.deleteTask(taskName)
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
    this.getTasks();
  }
  getProfile(): string {
    return this.profileService.getProfileName();
  }
  byUrgency(): void {
    this.tasks = this.taskService.sortByUrgency();
  }
  byDate(): void {
    this.tasks = this.taskService.sortByDate();
  }
}


