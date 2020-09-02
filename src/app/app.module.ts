import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {AppStoreModule} from '@app/store/app-store.module'
import { AppRoutingModule } from '@app/app-routing.module';
import {UserModule} from '@app/features/user/user.module'
import {IdeaModule} from '@app/features/idea/idea.module'
//Services
import {ApiService} from '@app/services/api.service'
import {AuthService} from '@app/services/auth.service'


import { AppComponent } from '@app/app.component';
import { AuthComponent } from './components/auth/auth.component';
import {UIModule} from '@app/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthformComponent } from './components/authform/authform.component';
import { NavbarComponent } from './components/navbar/navbar.component'

import {UuidGuard} from '@app/services/uuid.guard';
import { IdeaEditableComponent } from './components/idea/idea-editable/idea-editable.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthformComponent,
    NavbarComponent,
    IdeaEditableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    BrowserAnimationsModule,
    UserModule,
    IdeaModule
  ],
  providers: [ApiService, AuthService, UuidGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
