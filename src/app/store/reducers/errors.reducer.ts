import {actions, ADD_ERROR, REMOVE_ERROR} from "@app/store/actions/errors.action"


export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error:undefined
}

export const errorReducer:(state:ErrorState, action:actions)=> ErrorState =
(state = initialState, action:actions) => {
  switch(action.type){
    case ADD_ERROR:
      return {...state, error:action.payload};
    case REMOVE_ERROR:
      return {...state, error:null}
    default:
      return state;
  }
}

/* export function errorReducer(state:ErrorState = initialState, action:actions) {
  switch(action.type){
    case ADD_ERROR:
      return {...state, error:action.payload}
    case REMOVE_ERROR:
      return {...state, error:null}
    default:
      return state;
  }
} */

