import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectAllIdeas, selectIdeaLoader, selectIdeaState } from '../state';
import { LoadIdeas, CreateIdea, UpvoteIdea, DownvoteIdea } from '../state/idea.action';
import { Observable, Subscription } from 'rxjs';
import { Idea, IdeaDTO } from '@app/models/idea';
import { Entity } from '@app/models/entity';
import { User } from '@app/models/user';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit,OnDestroy {

  ideas:Observable<Idea[]>
  loader:Observable<boolean>
  currentUser:User
  auth$:Subscription
  constructor(
    private _store:Store<AppState>
  ) { }
  ngOnInit() {
    this._store.dispatch(new LoadIdeas())
    this.ideas = this._store.select(selectAllIdeas)
    this.loader = this._store.select(selectIdeaLoader)
    console.log(this.loader);

    this.auth$ = this._store.select(
      state=>state.auth.user).subscribe(
        res=>this.currentUser=res
      )
  }
  ngOnDestroy(){
    this.auth$.unsubscribe()
  }

  upvote(id: string) {
    console.log("wtff")
    this._store.dispatch(new UpvoteIdea(id));
  }
  downvote(id: string) {
    this._store.dispatch(new DownvoteIdea(id));
  }

}
