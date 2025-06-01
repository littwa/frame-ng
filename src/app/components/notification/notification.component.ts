import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { getErrors } from 'src/app/store/error/error.selectors';
import { BehaviorSubject, skip, Subject, takeUntil } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import * as screenshotsActions from 'src/app/store/screenshots/screenshots.actions';
import { filter } from 'rxjs/operators';
import { actionTest } from '../../routes/main/screenshots/lists/screenshots-list-item/screenshots-list-item.component';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit, OnDestroy {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private snackBar: MatSnackBar,
    private store: Store,
    private actions$: Actions,
  ) {}

  ngOnInit(): void {
    this.subscriberError();
    this.subscriberDelScreenshotsList();
    this.subscriberTest();
  }

  openSnackBar(message: string, action: string, config: MatSnackBarConfig) {
    this.snackBar.open(message, action, config);
  }

  handleError(v) {
    // this.snackBar.openFromTemplate()
    this.snackBar.open(v.payload.message, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 15000,
      panelClass: ['snack__custom-style'],
    });
  }

  subscriberError() {
    this.store
      .select(getErrors)
      .pipe(
        skip(1),
        takeUntil(this.unsubscribe$),
        filter(v => {
          console.log('filter error', v.payload.error.message !== 'User was not found');
          return v.payload.error.message !== 'User was not found';
        }),
      )
      .subscribe(this.handleError.bind(this));

    // this.actions$.pipe(ofType(actions.updateProductsSuccess)).subscribe(v => {
    //   this.updateProdSuccess(v.payload);
    // });

    // this.store
    //   .select(getCreatedProduct)
    //   .pipe(skip(1), takeUntil(this.unsubscribe$))
    //   .subscribe(this.createdProdSuccess.bind(this));
    //
    // this.actions$.pipe(ofType(actions.updateProductsSuccess)).subscribe(v => {
    //   this.updateProdSuccess(v.payload);
    // });
  }

  subscriberDelScreenshotsList() {
    this.actions$.pipe(ofType(screenshotsActions.delScreenshotsListSuccess)).subscribe(v => {
      console.log('delScreenshotsListSuccess', v);
      this.snackBar.open(`ScreenshotsList '${1}' deleted`, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 15000,
        panelClass: ['success__custom-style'],
      });
    });
  }

  subscriberTest() {
    this.actions$.pipe(ofType(actionTest)).subscribe(v => {
      console.log('actionTest', v);
      this.snackBar.open(`ActionTest '${1454}' deleted`, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 15000,
        panelClass: ['success__custom-style'],
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
