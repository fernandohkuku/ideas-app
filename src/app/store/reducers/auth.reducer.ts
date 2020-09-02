import {actions, LOGIN_USER, REGISTER_USER, SET_CURRENT_USER, SET_INITIAL_USER} from "@app/store/actions/auth.action"
import{ User} from "@app/models/user"


export interface AuthState {
  user: User | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  loaded: false
};


export const authReducer: (state: AuthState, action: actions) => AuthState = (
  state = initialState,
  action: actions
) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, loaded: false };
    case REGISTER_USER:
      return { ...state, loading: true, loaded: false };
    case SET_INITIAL_USER:
      return { ...state, loading: true, loaded: false };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
