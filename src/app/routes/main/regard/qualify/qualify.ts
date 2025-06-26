import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qualify',
  imports: [],
  templateUrl: './qualify.html',
  styleUrl: './qualify.scss',
})
export class Qualify implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    console.log('Qualify this.activatedRoute.snapshot', this.activatedRoute.snapshot);
    console.log('Qualify this.router', this.router);
  }
}
