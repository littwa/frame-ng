import { Component } from '@angular/core';
import { ControlComponent } from 'src/app/components/control/control.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ControlComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
