import {Action} from '@ngrx/store'
import {User} from '@app/models/user'

export const LOAD_USERS = "[USER] Load Users";
export const LOAD_USERS_SUCCESS = "[USER] Load Users Success";


export const  LOAD_USER = "[USER] Load User"
export const  LOAD_USER_SUCCESS = "[USER] Load User"


export class LoadUsers implements Action{
  readonly type = LOAD_USERS
}


export class LoadUsersSuccess implements Action{
  readonly type = LOAD_USERS_SUCCESS
  constructor(public payload:User[]){}
}


export class LoadUser implements Action{
  readonly type = LOAD_USER
  constructor(public payload:string){}
}


export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: User) {}
}



export type actions = LoadUsers | LoadUsersSuccess | LoadUser | LoadUserSuccess
