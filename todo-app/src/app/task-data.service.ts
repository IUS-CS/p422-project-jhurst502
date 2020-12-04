import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task';
import {consoleTestResultHandler} from "tslint/lib/test";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) {}
  private data = {
    name: '',
    dueDate: '',
    urgency: Number
  };

  private url = '/v1/tasks';

  getData(): any{
    return this.data;
  }

  updateData(newData): void {
    if (newData.name) {
      this.data.name = newData.name;
    }
    if (newData.dueDate) {
      this.data.dueDate = newData.dueDate;
    }
    if (newData.urgency) {
      this.data.urgency = newData.urgency;
    }
    console.log(this.data);
  }

  // public getTaskName(name: string): Observable<Task> {
  //   return this.http.get<Task>(`${this.url}/${name}`);
  // }
  // public getTaskUrgency(urgency: string): Observable<Task> {
  //   return this.http.get<Task>(`${this.url}/${urgency}`);
  // }
  public deleteTask(name: string): Observable<any> {
    return this.http.delete(`${this.url}/${name}`);
  }
  public addTask(name: string, task: Task): Observable<any> {
    return this.http.post(this.url, task);
  }
  public getAll(): Observable<Task> {
    return this.http.get<Task>(this.url);
  }
  public sortByUrgency(): Observable<Task> {
    return this.http.get<Task>(`${this.url}/byUrgency`);
  }
  public sortByDate(): Observable<Task> {
    return this.http.get<Task>(`${this.url}/byDate`);
  }
  public getTasksObj(): object {
    return this.http.get(this.url);
  }
}
