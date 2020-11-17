import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) {}
  private url = '/v1/tasks';

  public getTaskName(name: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${name}`);
  }
  public getTaskUrgency(urgency: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${urgency}`);
  }
  public deleteTask(name: string): Observable<any> {
    return this.http.delete(`${this.url}/${name}`);
  }
  public addTask(name: string, task: Task): Observable<any> {
    return this.http.put(this.url, task);
  }
  public getAll(): Observable<Task> {
    return this.http.get<Task>(this.url);
  }
}
