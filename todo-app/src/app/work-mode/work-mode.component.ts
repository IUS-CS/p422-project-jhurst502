import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable, timer, NEVER, BehaviorSubject, fromEvent, of} from 'rxjs';
import {map, tap, takeWhile, share, startWith, switchMap, filter} from 'rxjs/operators';
import {CountdownComponent} from 'ngx-countdown';


@Component({
  selector: 'app-work-mode',
  templateUrl: './work-mode.component.html',
  styleUrls: ['./work-mode.component.scss']
})


export class WorkModeComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  time = {
    hour: 0,
    minute: 0
  };
  timeToNumber: number;
  timeEntered: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.timeEntered = false;
    }

  logTime(): void {
    console.log(this.time);
  }

  submitTime(): void {
    console.log(this.time);
    this.timeToNumber = this.time.hour * 3600 + this.time.minute * 60;
    this.timeEntered = true;
  }
}
