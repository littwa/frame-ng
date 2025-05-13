import { Component, inject, Inject, Injector, input, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INJECTION_TOKEN_POST_CONTENT } from 'src/app/injectors/injection.tokens';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, MatDialogClose],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isFromHeader = input(false);
  isBurger = false;
  content: any;
  constructor(public injector: Injector) {}

  ngOnInit() {
    if (!this.isFromHeader()) {
      this.content = this.injector.get(INJECTION_TOKEN_POST_CONTENT);
      this.isBurger = this.content.isBurger;
      // this.xxx = inject(INJECTION_TOKEN_POST_CONTENT); // error
    }
  }
}
