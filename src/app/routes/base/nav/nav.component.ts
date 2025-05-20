import { Component, Injector, input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INJECTION_TOKEN_POST_CONTENT } from 'src/app/injectors/injection.tokens';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isFromHeader = input(false);
  isBurger = false;
  data: any;
  constructor(public injector: Injector) {}

  ngOnInit() {
    if (!this.isFromHeader()) {
      this.data = this.injector.get(INJECTION_TOKEN_POST_CONTENT);
      this.isBurger = this.data.content.isBurger;
      // this.xxx = inject(INJECTION_TOKEN_POST_CONTENT); // error
    }
  }

  handleClick() {
    if (!this.isBurger) return;
    this.data.dialogRef.close();
  }
}
