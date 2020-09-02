import { IdeaState } from './index';
import * as fromIdeaAction from './idea.action';

const initialState:IdeaState = {
  ideas:{},
  page: 0,
  loading: false,
  loaded: false,
  selectedIdea: null
}



export const ideaReducer:(state:IdeaState, action:fromIdeaAction.actions) => IdeaState =(
  state = initialState,
  action
  ) =>{
    switch(action.type){
      case fromIdeaAction.LOAD_IDEAS:
        return {...state, loading:true, loaded:false};
      case fromIdeaAction.LOAD_IDEA:
        return {...state,
          selectedIdea:action.payload,
          loading:true,
          loaded:false
        };
      case fromIdeaAction.CREATE_IDEA:
        return {...state, loading:true, loaded:false};
      case fromIdeaAction.UPDATE_IDEA:
        return {...state, loading:true, loaded:false};
      case fromIdeaAction.DELETE_IDEA:
        return {...state, loading:true, loaded:false};
      case fromIdeaAction.UPVOTE_IDEA:
        return {...state, loading:true, loaded:false};
      case fromIdeaAction.DOWNVOTE_IDEA:
        return {...state, loading:true, loaded:false};
      case fromIdeaAction.LOAD_IDEAS_SUCCESS:
        return {
          ...state,
          ideas: action.payload.reduce(
            (acc, idea) => ({...acc, [idea.id] : idea }),
            state.ideas,
          ),
          loading:false,
          loaded:true
        };
      case fromIdeaAction.LOAD_IDEA_SUCCESS:
        return{
          ...state,
          ideas: action.payload
            ? {...state.ideas, [action.payload.id] : action.payload }
            : state.ideas,
          loading:false,
          loaded:true
        };
      case fromIdeaAction.CREATE_IDEA_SUCCESS:
        return{
          ...state,
          ideas: {...state.ideas, [action.payload.id]:action.payload },
          selectedIdea:action.payload.id,
          loading:false,
          loaded:true
        };
      case fromIdeaAction.UPDATE_IDEA_SUCCESS:
        return{
          ...state,
          ideas:{...state.ideas, [action.payload.id]: action.payload },
          selectedIdea: action.payload.id,
          loading:false,
          loaded:true
        };
      case fromIdeaAction.DELETE_IDEA_SUCCESS:
        return{
          ...state,
          ideas: Object.keys(state.ideas)
          .filter(key=>key !== action.payload)
          .reduce((acc,key)=> ({...acc, key:state[key] }), {}),
          loading:false,
          loaded:true
        };
      default:
        return state;
    }


  }


 /*  export const ideaReducer: (state: IdeaState, action: fromIdeaAction.actions) => IdeaState = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case fromIdeaAction.LOAD_IDEAS:
        return { ...state, loading: true, loaded: false };
      case fromIdeaAction.LOAD_IDEA:
        return {
          ...state,
          selectedIdea: action.payload,
          loading: true,
          loaded: false
        };
      case fromIdeaAction.CREATE_IDEA:
        return { ...state, loading: true, loaded: false };
      case fromIdeaAction.UPDATE_IDEA:
        return { ...state, loading: true, loaded: false };
      case fromIdeaAction.DELETE_IDEA:
        return { ...state, loading: true, loaded: false };
      case fromIdeaAction.UPVOTE_IDEA:
        return { ...state, loading: true, loaded: false };
      case fromIdeaAction.DOWNVOTE_IDEA:
        return { ...state, loading: true, loaded: false };
      case fromIdeaAction.LOAD_IDEAS_SUCCESS:
        return {
          ...state,
          ideas: action.payload.reduce(
            (acc, idea) => ({ ...acc, [idea.id]: idea }),
            state.ideas
          ),
          loading: false,
          loaded: true
        };
      case fromIdeaAction.LOAD_IDEA_SUCCESS:
        return {
          ...state,
          ideas: action.payload
            ? { ...state.ideas, [action.payload.id]: action.payload }
            : state.ideas,
          loading: false,
          loaded: true
        };
      case fromIdeaAction.CREATE_IDEA_SUCCESS:
        return {
          ...state,
          ideas: { ...state.ideas, [action.payload.id]: action.payload },
          selectedIdea: action.payload.id,
          loading: false,
          loaded: true
        };
      case fromIdeaAction.UPDATE_IDEA_SUCCESS:
        return {
          ...state,
          ideas: { ...state.ideas, [action.payload.id]: action.payload },
          selectedIdea: action.payload.id,
          loading: false,
          loaded: true
        };
      case fromIdeaAction.DELETE_IDEA_SUCCESS:
        return {
          ...state,
          ideas: Object.keys(state.ideas)
            .filter(key => key !== action.payload)
            .reduce((acc, key) => ({ ...acc, key: state[key] }), {}),
          loading: false,
          loaded: true
        };
      default:
        return state;
    }
  }; */
