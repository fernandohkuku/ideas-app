import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects"
import { ideaReducer } from './state/idea.reducer';
import {IdeaEffects} from './state/idea.effect';
import { IdeasComponent } from '../ideas/ideas.component'
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '@app/ui.module';

const routes:Routes =[
  { path: '', component: IdeasComponent },
]


@NgModule({
  declarations: [IdeasComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("ideas", ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ]
})
export class IdeaModule { }
