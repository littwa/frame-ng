import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { LogoComponent } from '../logo/logo.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthComponent, LogoComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
