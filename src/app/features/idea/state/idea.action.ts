import { Action } from '@ngrx/store'
import { Idea, IdeaDTO } from '../../../models/idea'

export const LOAD_IDEAS = '[IDEA] Load Ideas'
export const LOAD_IDEAS_SUCCESS = '[IDEA] Load Ideas Success'


export const LOAD_IDEA = '[IDEA] Load Idea'
export const LOAD_IDEA_SUCCESS = '[Idea] Load Idea Success'

export const CREATE_IDEA = '[Idea] Create Idea'
export const CREATE_IDEA_SUCCESS = '[Idea] Create Idea Success'

export const UPDATE_IDEA = '[Idea] Update Idea'
export const UPDATE_IDEA_SUCCESS = '[Idea] Update Idea Success'

export const DELETE_IDEA = '[Idea] Delete Idea'
export const DELETE_IDEA_SUCCESS = '[Idea] Delete Idea Success'

export const UPVOTE_IDEA = '[Idea] Upvote Idea'
export const DOWNVOTE_IDEA = '[Idea] Downvote Idea'

export class LoadIdeas implements Action {
  readonly type = LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) {}
}

export class LoadIdea implements Action {
  readonly type = LOAD_IDEA;
  constructor(public payload: string) {}
}

export class LoadIdeaSuccess implements Action {
  readonly type = LOAD_IDEA_SUCCESS;
  constructor(public payload?: Idea) {}
}

export class CreateIdea implements Action {
  readonly type = CREATE_IDEA;
  constructor(public payload: IdeaDTO) {}
}

export class CreateIdeaSuccess implements Action {
  readonly type = CREATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class UpdateIdea implements Action {
  readonly type = UPDATE_IDEA;
  constructor(public payload: Partial<IdeaDTO>) {}
}

export class UpdateIdeaSuccess implements Action {
  readonly type = UPDATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class DeleteIdea implements Action {
  readonly type = DELETE_IDEA;
  constructor(public payload: string) {}
}

export class DeleteIdeaSuccess implements Action {
  readonly type = DELETE_IDEA_SUCCESS;
  constructor(public payload: string) {}
}

export class UpvoteIdea implements Action {
  readonly type = UPVOTE_IDEA;
  constructor(public payload: string) {}
}

export class DownvoteIdea implements Action {
  readonly type = DOWNVOTE_IDEA;
  constructor(public payload: string) {}
}

export type actions =
  | LoadIdeas
  | LoadIdeasSuccess
  | LoadIdea
  | LoadIdeaSuccess
  | CreateIdea
  | CreateIdeaSuccess
  | UpdateIdea
  | UpdateIdeaSuccess
  | DeleteIdea
  | DeleteIdeaSuccess
  | UpvoteIdea
  | DownvoteIdea;
