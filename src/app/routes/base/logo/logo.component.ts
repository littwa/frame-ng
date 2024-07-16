import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  private router = inject(Router);

  navigate() {
    this.router.navigate(['/']);
  }
}
