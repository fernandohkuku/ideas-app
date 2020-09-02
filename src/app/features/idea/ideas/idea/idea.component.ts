import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Idea } from '@app/models/idea';
import { Store } from '@ngrx/store';
import { AppState, UpvoteIdea, DownvoteIdea } from '../../state';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  @Input()
  idea:Idea
  @Input()
  displayOptions: boolean = false;
  @Output()
  onUpvote: EventEmitter<void> = new EventEmitter();
  @Output()
  onDownvote: EventEmitter<void> = new EventEmitter();

  constructor(
    private _store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
