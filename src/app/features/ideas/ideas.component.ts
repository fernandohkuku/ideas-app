import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectAllIdeas, selectIdeaLoader } from '../idea/state';
import { LoadIdeas } from '../idea/state/idea.action';
import { Observable } from 'rxjs';
import { Idea } from '@app/models/idea';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  ideas:Observable<Idea[]>
  loader: Observable<boolean>;
  constructor(
    private _store:Store<AppState>
  ) { }
  ngOnInit() {
    this._store.dispatch(new LoadIdeas())
    this._store.select(selectIdeaLoader)

  }

}
