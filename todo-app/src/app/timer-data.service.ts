import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timer } from './models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerDataService {

  constructor(
    private http: HttpClient
  ) {}
  private url = '/v1/timer.ts';

  public getTimer(): Observable<Timer> {
    return this.http.get<Timer>(this.url);
  }

  // public stop(): Observable<any> {
  //   return this.http.patch<Timer>(this.url);
  // }
}
