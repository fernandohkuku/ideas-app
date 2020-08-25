import {actions, TAB_CHANGE, TAB_CURRENT} from "@app/store/actions/tab.action"

export interface TabState{
  tab: number;
  loading:boolean,
  loaded:boolean
}
const initialState:TabState = {
  tab:0,
  loading:false,
  loaded:false
}
export const tabReducer:(state:TabState, action:actions)=> TabState =
(state = initialState, action:actions) => {
  switch(action.type){
    case TAB_CHANGE:
      return {...state, tab:action.payload,loading:false, loaded:true}
    case TAB_CURRENT:
      return {...state, loading:true, loaded:false}
    default:
      return state;
  }
}
