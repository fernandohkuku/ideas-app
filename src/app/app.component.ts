import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-store.module';
import { SetInitialUser } from '@app/store/actions/auth.action';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { TabChange } from './store/actions/tab.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _store:Store<AppState>,private _snackBar:MatSnackBar){}
  ngOnInit() {
    this._store.dispatch(new SetInitialUser())
    this._store.dispatch(new TabChange(0))
    this._store.select(state=>state.error).subscribe(valor=>this.showError(valor.error))
  }

  showError(err){
    if(err){
    this._snackBar.open(
      "Error", err.message || "Internal server error",{
      duration: 900,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,

      })
    }
  }
}
