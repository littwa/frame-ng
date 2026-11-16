import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-regard',
  imports: [RouterOutlet],
  templateUrl: './regard.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './regard.scss',
})
export class Regard implements OnInit {
  router = inject(Router);
  ngOnInit() {
    // const regardId = this.router.lastSuccessfulNavigation().finalUrl.root.children.primary.segments[2].path;
    // console.log(7009, regardId);
  }
}
