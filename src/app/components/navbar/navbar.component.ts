import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { MatMenuItem } from '@angular/material/menu';

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

  constructor(public _authService:AuthService) { }

  ngOnInit(): void {
  }

}

export interface navItem{
  displayName: string;
  iconName?: string;
  routerLink:string
}
