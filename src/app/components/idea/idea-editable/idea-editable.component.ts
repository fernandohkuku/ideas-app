import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Idea, IdeaDTO } from '@app/models/idea';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateWhiteSpace } from '@app/utilities/validators';

@Component({
  selector: 'app-idea-editable',
  templateUrl: './idea-editable.component.html',
  styleUrls: ['./idea-editable.component.scss']
})
export class IdeaEditableComponent implements OnInit,OnChanges {

  @Input()
  idea:Idea

  @Output()
  onSubmit: EventEmitter<IdeaDTO> = new EventEmitter<IdeaDTO>();

  ideaform:FormGroup

  constructor(private _fb:FormBuilder) { }

  ngOnInit(){
    this.buildForm()
  }

  ngOnChanges(){
    this.buildForm()
  }
  buildForm(){
    this.ideaform = this._fb.group({
      idea: this._fb.control((this.idea && this.idea.idea) || '', [
        Validators.required,
        validateWhiteSpace
      ]),
      description: this._fb.control((this.idea && this.idea.description) || '', [
        Validators.required,
        validateWhiteSpace
      ])
    });
  };

  submit() {
    const sumbission: IdeaDTO = this.ideaform.getRawValue();
    this.onSubmit.emit(sumbission);
  }

}
