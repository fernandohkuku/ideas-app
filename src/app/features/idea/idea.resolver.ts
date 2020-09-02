import {Injectable} from "@angular/core"
import {Resolve} from "@angular/router"
import {Store} from "@ngrx/store"
import { AppState } from '@app/store/app-store.module'
import { take, map } from 'rxjs/operators'
import { LoadIdea } from './state'
@Injectable()
export class IdeaResolver implements Resolve<void>{

  constructor(private _store:Store<AppState>){
  }
  resolve(){
    return this._store
    .select(state => state.router.state.params.id)
    .pipe(
      take(1),
      map(id => {
        this._store.dispatch(new LoadIdea(id));
      })
    );
  }
}

