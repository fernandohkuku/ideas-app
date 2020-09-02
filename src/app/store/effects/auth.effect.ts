import { Injectable } from "@angular/core"
import { Action, Store } from "@ngrx/store"

import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from "@app/services/auth.service"
import { Observable, of } from "rxjs";
import { mergeMap, catchError, map, tap } from "rxjs/operators"
import {
  SetInitialUser,
  SetCurrentUser,
  LoginUser,
  RegisterUser,
  SET_INITIAL_USER,
  LOGIN_USER,
  REGISTER_USER
} from "@app/store/actions/auth.action"

import { User } from '@app/models/user';
import { AddError, RemoveError } from '../actions/errors.action';
import { AppState } from '@app/store/app-store.module';


@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<SetInitialUser>(SET_INITIAL_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: SetInitialUser) =>
      this.authService.whoami().pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new SetCurrentUser(null));
          this.authService.token = null;
          return of(new AddError(err.error));
        })
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<LoginUser>(LOGIN_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: LoginUser) =>
      this.authService.auth('login', action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new SetCurrentUser(null));
          this.authService.token = null;
          return of(new AddError(err.error));
        })
      )
    )
  );


  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<RegisterUser>(REGISTER_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: RegisterUser) =>
      this.authService.auth('register', action.payload).pipe(
        map((user: User) => new SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new SetCurrentUser(null));
          this.authService.token = null;
          return of(new AddError(err.error));
        })
      )
    )
  );

}
