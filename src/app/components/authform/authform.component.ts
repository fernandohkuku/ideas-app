import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthDTO } from '@app/models/auth';
import { AppState } from '@app/store/app-store.module';
import { Store, select } from '@ngrx/store';
import { validateWhiteSpace } from '@app/utilities/validators';
import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import { TabState } from '@app/store/reducers/tab.reducer';
@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit {

  authForm:FormGroup
  auth:AuthDTO
  tabCurrent:number
  constructor(private fb:FormBuilder, private store:Store<AppState>) { }
  ngOnInit() {
    this.authForm = this.fb.group({
      username:this.fb.control("",[Validators.required, validateWhiteSpace]),
      password:this.fb.control("", [Validators.required, validateWhiteSpace, Validators.minLength(6)])
    })
    this.store.pipe(select(state=>state.tab)).subscribe(
      state=>this.currentTab(state)
    )
  }

  currentTab(res:TabState){
    this.tabCurrent = res.tab
  }
  authActions(){
    this.auth = this.authForm.getRawValue();
    if(this.tabCurrent ===0){
      this.login(this.auth)
    }else{
      this.register(this.auth)
    }
  }
  login(auth:AuthDTO){
    this.store.dispatch(new LoginUser(auth))
  }
  register(auth:AuthDTO){
    this.store.dispatch(new RegisterUser(auth))
  }
}
