import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { TabChange } from '@app/store/actions/tab.action';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  activeTabIndex:number
  constructor(private _store:Store<AppState>){}
  ngOnInit(){
  }
  ontab(){
    this._store.dispatch(new TabChange(this.activeTabIndex))
  }
}
