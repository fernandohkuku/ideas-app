import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUsers } from '../state/user.action';
import { Observable } from 'rxjs';
import { User } from '@app/models/user';
import { AppState } from '../state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Observable<User[]>

  constructor(private _store:Store<AppState>) { }

  ngOnInit(): void {
    this._store.dispatch(new LoadUsers())
    this.users = this._store.select(state=>state.users.users)
  }

}
