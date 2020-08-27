import {actions, LOAD_USERS, LOAD_USERS_SUCCESS} from '@app/features/user/state/user.action'
import {UserState} from '@app/features/user/state/index'

const initialState:UserState = {
  loaded:false,
  loading:false,
  users:[]
}


export const userReducer:(state:UserState, action:actions)=> UserState = (
  state= initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return {...state, loaded:false, loading:true};
    case LOAD_USERS_SUCCESS:
      return {...state, users:action.payload, loaded:true, loading:false};
    default:
      return state;
  }
}

