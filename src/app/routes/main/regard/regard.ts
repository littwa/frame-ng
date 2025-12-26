import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-regard',
  imports: [RouterOutlet],
  templateUrl: './regard.html',
  styleUrl: './regard.scss',
})
export class Regard implements OnInit {
  router = inject(Router);
  ngOnInit(){
   // const regardId = this.router.lastSuccessfulNavigation().finalUrl.root.children.primary.segments[2].path;
   // console.log(7009, regardId);
  }
}
