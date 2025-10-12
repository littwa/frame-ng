import { Component, ElementRef, inject, OnInit, QueryList, viewChildren, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalContainerComponent } from 'src/app/components/modal-container/modal-container.component';
import { NavComponent } from 'src/app/routes/base/nav/nav.component';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { ControlService } from 'src/app/services/control.service';
import { CreateScreenshotsListComponent } from 'src/app/routes/main/screenshots/lists/create-screenshots-list/create-screenshots-list.component';
import { RegardTextAdd } from 'src/app/routes/main/regard/regard-text-add/regard-text-add';
import { RegardQualifyCreate } from 'src/app/routes/main/regard/regard-qualify-create/regard-qualify-create';
import { Store } from '@ngrx/store';
import { getQualifyReset } from 'src/app/store/regard/regard.actions';
import { ModalImage } from 'src/app/components/modal-image/modal-image';
import { RegardService } from 'src/app/services/regard.service';
import { _MatCellHarnessBase } from '@angular/material/table/testing';
import { IStateControl } from '../../interfaces/common.interfaces';

@Component({
  selector: 'app-control',
  imports: [MatIcon],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  standalone: true,
})
export class ControlComponent implements OnInit {
  store = inject(Store);
  dialog = inject(MatDialog);
  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);
  location = inject(Location);
  controlService = inject(ControlService);
  controlState: IStateControl[];

  @ViewChildren('btn', { read: ElementRef }) btns: QueryList<any>; // The same
  btnControls = viewChildren<ElementRef, any>('btn', { read: ElementRef }); // The same

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
    // this.btns.map(v => console.log(v._elementRef.nativeElement.className.includes('disabled')));
    // this.btns.forEach(e => console.log(e.nativeElement));
    if (this.btns.get(2).nativeElement.className.includes('disabled')) return;

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
        content: { name: 'Prepare Qualify' },
        template: RegardQualifyCreate,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-qualify-container',
    });
  }

  handlerBackToRegardItemized() {
    this.location.back();
    console.log(102);
    this.store.dispatch(getQualifyReset());
  }

  handlerShowTextImage() {
    this.dialog.open(ModalImage, {
      data: {
        content: { name: 'Show Image' },
        template: null,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-qualify-container',
    });
  }

  handlerSortTextsList() {}
}
