import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, share, Subject, tap, timer } from 'rxjs';
import { ComponentA } from './component-a/component-a';
import { ComponentB } from './component-b/component-b';

@Component({
  selector: 'app-assay',
  imports: [ComponentA, ComponentB],
  templateUrl: './assay.html',
  styleUrl: './assay.scss',
})
export class Assay implements OnInit {
  #privateBehaviorSubject = new Subject();
  p;
  constructor() {
    this.p = this.#privateBehaviorSubject.pipe(
      tap(v => console.log('tap1')),
      tap(v => console.log('tap2')),
      tap(v => console.log('tap3')),
      share(),
    );

    this.p.subscribe(v => console.log('S1', v));
    this.p.subscribe(v => console.log('S2', v));

    this.#privateBehaviorSubject.next(1);
    this.#privateBehaviorSubject.next(2);
    this.#privateBehaviorSubject.next(3);
  }

  ngOnInit() {
    // this.p.subscribe(v => console.log('S3', v));
    // timer(3000).subscribe(v => this.p.subscribe(b => console.log('S4', v)));
    // timer(4000).subscribe(() => this.#privateBehaviorSubject.next(4));
  }
}
