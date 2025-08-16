import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { NavComponent } from 'src/app/routes/base/nav/nav.component';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { ControlService } from 'src/app/services/control.service';
import { IStateControl, IStateNavControl } from '../../interfaces/common.interfaces';
import { CreateScreenshotsListComponent } from 'src/app/routes/main/screenshots/lists/create-screenshots-list/create-screenshots-list.component';
import { RegardTextAdd } from 'src/app/routes/main/regard/regard-text-add/regard-text-add';
import { RegardQualifyCreate } from '../../routes/main/regard/regard-qualify-create/regard-qualify-create';

@Component({
  selector: 'app-control',
  imports: [MatIcon, RouterLinkActive],
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

    this.activatedRouter.url.subscribe(v => console.log(555555, v));
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

  handlerBackToRegardList() {
    this.router.navigate(['./regard/list']);
  }

  handlerHomeRegard() {
    console.log(10003);
    this.router.navigate(['./regard']);
  }

  handlerListRegard() {
    // this.activatedRouter.snapshot;
    console.log(10005, this.activatedRouter.snapshot.url);
    this.router.navigate(['./regard/list']);
  }

  handlerFavoriteRegard() {
    console.log('handlerFavoriteRegard');
    this.router.navigate(['./regard/favorite']);
  }
  handlerStatisticsRegard() {
    console.log('handlerStatisticsRegard');
    this.router.navigate(['./regard/statistics']);
  }

  handlerAddTextToRegard() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { name: 'Add Text' },
        template: RegardTextAdd,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-custom-container',
    });
  }

  handlerPlayQualify() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { name: 'Create Qualify', regardId: 1 },
        template: RegardQualifyCreate,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-custom-container',
    });
  }

  handlerSortTextsList() {}
}
