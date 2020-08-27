import {Action} from '@ngrx/store'
import {User} from '@app/models/user'

export const LOAD_USERS = "[USERS] Load Users";
export const LOAD_USERS_SUCCESS = "[USERS] Load Users Success";


export class LoadUsers implements Action{
  readonly type = LOAD_USERS
}


export class LoadUsersSuccess implements Action{
  readonly type = LOAD_USERS_SUCCESS
  constructor(public payload:User[]){}
}



export type actions = LoadUsers | LoadUsersSuccess
