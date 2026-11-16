import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../base/header/header.component';
import { FooterComponent } from '../base/footer/footer.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  // standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main.component.scss',
})
export class MainComponent {}
