import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  private router = inject(Router);

  navigate() {
    this.router.navigate(['/']);
  }
}
