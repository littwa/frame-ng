import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-regard-list',
  imports: [],
  templateUrl: './regard-list.html',
  styleUrl: './regard-list.scss',
})
export class RegardList implements OnInit {
  store = inject(Store);

  ngOnInit() {}
}
