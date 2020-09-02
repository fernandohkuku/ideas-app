import {actions, LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USER} from '@app/features/user/state/user.action'
import {UserState} from '@app/features/user/state/index'

const initialState:UserState = {
  loaded:false,
  loading:false,
  users:[],
  page:0
}


export const userReducer:(state:UserState, action:actions)=> UserState = (
  state= initialState, action) => {
  switch(action.type){
    case LOAD_USERS:{
      const {page} = state
      return {...state, page:page + 1, loaded:false, loading:true};
    }
    case LOAD_USER:{
        return { ...state, loading: true, loaded: false };
    }
    case LOAD_USERS_SUCCESS:{
      const users = action.payload
      return {...state, users, loaded:true, loading:false};
    }
    default:
      return state;
  }
}

