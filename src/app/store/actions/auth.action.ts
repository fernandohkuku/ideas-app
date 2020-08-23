import { Action } from "@ngrx/store"
import { User } from "@app/models/user"
import { AuthDTO } from "@app/models/auth"


export const LOGIN_USER = "[AUTH] Login User";
export const REGISTER_USER = "[AUTH] Register User";
export const SET_CURRENT_USER = "[AUTH] Set current user";
export const SET_INITIAL_USER = "[AUTH] Set initial user";

export class LoginUser implements Action {
  readonly type = LOGIN_USER
  constructor(public payload: AuthDTO) { }
}

export class RegisterUser implements Action{
  readonly type = REGISTER_USER
  constructor(public payload:AuthDTO){}
}

export class SetCurrentUser implements Action{
  readonly type = SET_CURRENT_USER
  constructor(public payload:User | null){}
}


export class SetInitialUser implements Action{
  readonly type = SET_INITIAL_USER
}


export type actions = LoginUser | RegisterUser | SetCurrentUser | SetInitialUser
