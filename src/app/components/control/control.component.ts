import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { NavComponent } from '../../routes/base/nav/nav.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ControlService } from '../../services/control.service';
import { IStateControl, IStateNavControl } from '../../interfaces/common.interfaces';
import { CreateScreenshotsListComponent } from '../../routes/main/screenshots/lists/create-screenshots-list/create-screenshots-list.component';

@Component({
  selector: 'app-control',
  imports: [MatIcon],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  standalone: true,
})
export class ControlComponent implements OnInit {
  dialog = inject(MatDialog);
  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);
  location = inject(Location);
  controlService = inject(ControlService);
  controlState$ = this.controlService.state$$;
  controlState: any;

  constructor() {}

  ngOnInit() {
    this.controlService.state$$.subscribe(v => {
      console.log(9, v);
      this.controlState = v ? Object.values(v) : [];
    });
  }

  handlerOpenNavMenu() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { isBurger: true, name: 'Navigate menu' },
        template: NavComponent,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'custom-container',
    });
  }

  handlerHome() {
    console.log(1007, this.controlState);
    this.router.navigate(['./']);
  }

  handlerBack() {
    this.location.back();
  }

  handlerBackToScreenshotsMenu() {
    console.log(1008111, this.controlState);
    this.router.navigate(['./screenshots']);
  }

  handlerCreateScreenshotsList() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { name: 'Create Screenshots List' },
        template: CreateScreenshotsListComponent,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'custom-container',
    });
  }

  handlerBackToScreenshotsLists() {
    this.router.navigate(['./screenshots/lists']);
  }

  handlerBackToMainMenu() {
    this.router.navigate(['./']);
  }
}
