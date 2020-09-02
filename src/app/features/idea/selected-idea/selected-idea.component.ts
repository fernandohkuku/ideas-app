import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentIdea, IdeaState, UpvoteIdea, DownvoteIdea } from '../state';
import { Subscription } from 'rxjs';
import { Idea } from '@app/models/idea';
import { Entity } from '@app/models/entity';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.scss']
})
export class SelectedIdeaComponent implements OnInit,OnDestroy {

  private suscriptions$:Subscription
  idea:Idea
  constructor(
    private _store:Store<AppState>

  ) { }

  ngOnInit() {
    this.suscriptions$ = this._store.select(selectCurrentIdea).subscribe(
      idea =>{
        if(idea){
        this.idea = idea
        }
      }
    )
  }

  ngOnDestroy(){
    this.suscriptions$.unsubscribe()
  }

}
