import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule } from "@angular/material/card"
import {MatTabsModule } from "@angular/material/tabs"
import {MatFormFieldModule } from "@angular/material/form-field"
import {MatInputModule } from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[ MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class UIModule { }
