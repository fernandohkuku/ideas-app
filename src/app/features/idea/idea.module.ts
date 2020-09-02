import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { ideaReducer } from './state/idea.reducer';
import { IdeaEffects } from './state/idea.effect';
import { IdeasComponent } from './ideas/ideas.component'
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '@app/ui.module';
import { IdeaComponent } from './ideas/idea/idea.component';
import { SelectedIdeaComponent } from './selected-idea/selected-idea.component';
import { IdeaResolver } from '@app/features/idea/idea.resolver'
import { UuidGuard } from '@app/services/uuid.guard';
import { NewIdeaComponent } from './new-idea/new-idea.component';

const routes: Routes = [
  { path: '', component: IdeasComponent },
  {
    path: ':id', component: SelectedIdeaComponent,
    canActivate:[UuidGuard],
    resolve: { data: IdeaResolver }
  }
]


@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent, NewIdeaComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  providers: [IdeaResolver]
})
export class IdeaModule { }
