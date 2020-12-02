import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable, timer, NEVER, BehaviorSubject, fromEvent, of} from 'rxjs';
import {map, tap, takeWhile, share, startWith, switchMap, filter} from 'rxjs/operators';

/**
 * Code modified from https://itnext.io/coding-a-countdown-timer-with-rxjs-b3d459935b41
 **/

@Component({
  selector: 'app-work-mode',
  templateUrl: './work-mode.component.html',
  styleUrls: ['./work-mode.component.scss']
})
export class WorkModeComponent implements OnInit {
  time: Observable<number>;
  isStopped: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const toggle$ = new BehaviorSubject(true);

    const K = 1000;
    const INTERVAL = K;
    const MINUTES = 50;
    const TIME = MINUTES * K * 60;

    let current: number;
    let time = TIME;

    const toMinutesDisplay = (ms: number) => Math.floor(ms / K / 60);
    const toSecondsDisplay = (ms: number) => Math.floor(ms / K) % 60;

    const toSecondsDisplayString = (ms: number) => {
      const seconds = toSecondsDisplay(ms);
      return seconds < 10 ? `0${seconds}` : seconds.toString();
    };

    const currentSeconds = () => time / INTERVAL;
    const toMs = (t: number) => t * INTERVAL;
    const toRemainingSeconds = (t: number) => currentSeconds() - t;

    const remainingSeconds$ = toggle$.pipe(
      switchMap((running: boolean) => (running ? timer(0, INTERVAL) : NEVER)),
      map(toRemainingSeconds),
      takeWhile(t => t >= 0),
    );

    const ms$ = remainingSeconds$.pipe(
      map(toMs),
      tap(t => current = t)
    );

    const minutes$ = ms$.pipe(
      map(toMinutesDisplay),
      map(s => s.toString()),
      startWith(toMinutesDisplay(time).toString())
    );

    const seconds$ = ms$.pipe(
      map(toSecondsDisplayString),
      startWith(toSecondsDisplayString(time).toString())
    );

// update DOM
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');
    const toggleElement = document.querySelector('.btn-primary');
    const reset = document.querySelector('.b2');

    updateDom(minutes$, minutesElement);
    updateDom(seconds$, secondsElement);

// set click events
    fromEvent(toggleElement, 'click').subscribe(() => {
      toggle$.next(!toggle$.value);
    });
    fromEvent(reset, 'click').subscribe(() => {
      time = 50 * K * 60;
      toggle$.next(!toggle$.value);
    });

// update current time on clicks
    toggle$.pipe(
      filter((toggled: boolean) => !toggled)
    ).subscribe(() => {
      time = current;
    });

    remainingSeconds$.subscribe({
      complete: () => updateDom(of('Take a break!'), toggleElement)
    });

    function updateDom(source$: Observable<string>, element: Element): void {
      source$.subscribe((value) => element.innerHTML = value);
    }
  }
  Reset(K: number): number {
    let time = 50 * K * 60;
    return time;
  }
}
