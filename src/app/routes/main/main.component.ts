import { Component } from '@angular/core';
import { HeaderComponent } from '../base/header/header.component';
import { FooterComponent } from '../base/footer/footer.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgIf, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
