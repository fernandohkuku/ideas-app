import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {take, map} from 'rxjs/operators'
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import {AppState} from '@app/store/app-store.module'
import {uuid} from '@app/utilities/uuid'


@Injectable()
export class UuidGuard implements CanActivate {

  constructor(private _store:Store<AppState>){}


  canActivate():Observable<boolean>{
    return this._store.select(state=>state.router.state.params.id)
    .pipe(
      take(1),
      map(res =>uuid.test(res))
    )
  }

}
