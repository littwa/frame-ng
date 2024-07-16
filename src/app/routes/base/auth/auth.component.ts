import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { IStateUser } from 'src/app/interfaces/auth.interfaces';
import { Store } from '@ngrx/store';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { CommonModule, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LetDirective } from '@ngrx/component';
import { UpdUrlPipe } from 'src/app/pipes/upd-url.pipe';
import { getUser } from 'src/app/store/auth/auth.selectors';
import { authSignOutUserRequest } from '../../../store/auth/auth.actions';
import { selectAuthLoader } from '../../../store/loader/loader.selectors';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    NgTemplateOutlet,
    MatProgressSpinner,
    NgIf,
    NgForOf,
    LetDirective,
    CommonModule,
    UpdUrlPipe,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public isBrokenImgUrl = false;
  public user$: Observable<IStateUser> = this.store.select(getUser).pipe(tap(v => v));
  public authLoader$: Observable<boolean> = this.store.select(selectAuthLoader);
  @ViewChild('ava') ava: ElementRef | undefined;

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    // console.log(this.router);
    // console.log(this.route)
  }

  navigate() {
    this.router.navigate(['sign-in']);
  }

  signOut() {
    this.store.dispatch(authSignOutUserRequest());
  }

  navProfile(id: string): void {
    this.router.navigate(['profile', id]);
  }

  handleError(event: any) {
    this.isBrokenImgUrl = true;
    // event.target.src = 'assets/ico/avatar-default.png';
    event.onerror = null;
  }
}
