import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule, ActionReducerMap} from  "@ngrx/store"
import {StoreDevtoolsModule } from "@ngrx/store-devtools"
//
import {errorReducer, ErrorState} from "@app/store/reducers/errors.reducer"
import {authReducer, AuthState} from "@app/store/reducers/auth.reducer"
//
import {EffectsModule} from  "@ngrx/effects"
import {AuthEffects} from "@app/store/effects/auth.effect"

export const effects = [AuthEffects]


export const reducers :ActionReducerMap<AppState> ={
  error:errorReducer,
  auth:authReducer
}

export interface AppState {
  error:ErrorState
  auth:AuthState
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule { }
