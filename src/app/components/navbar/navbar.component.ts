import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { MatMenuItem } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { SetCurrentUser } from '@app/store/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items:navItem[] = [
    {
      displayName:'Home',
      iconName:'home',
      routerLink:'/',
    },
    {
      displayName:'Users',
      iconName:'account_box',
      routerLink:'/users'
    },
    {
      displayName:'Ideas',
      iconName:'info',
      routerLink:'ideas'
    }
  ]

  constructor(
    public _authService:AuthService,
    private _store:Store<AppState>,
    private _router:Router
    ) { }

  ngOnInit(): void {
  }
  onclick(){
    if(this._authService.token){
      this._authService.token=null
      this._store.dispatch(new SetCurrentUser(null))
    }
    this._router.navigate(['/auth'])
  }
}

export interface navItem{
  displayName: string;
  iconName?: string;
  routerLink:string
}
