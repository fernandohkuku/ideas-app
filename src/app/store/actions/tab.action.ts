import { Action } from "@ngrx/store"

export const TAB_CHANGE = "[TAB] Change Tab";
export const TAB_CURRENT = "[TAB] Current Tab"

export class TabChange implements Action {
  readonly type = TAB_CHANGE
  constructor(public payload:number | 0) { }
}
export class TabCurrent implements Action {
  readonly type = TAB_CURRENT
  constructor(){}
}
export type actions = TabChange | TabCurrent
