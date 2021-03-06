import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from "@env/environment";
import { AuthType, AuthDTO } from '@app/models/auth';
import { mergeMap} from 'rxjs/operators';
import {of, Observable} from "rxjs"
import { User } from '@app/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api:string = environment.api_serve+ '/auth'
  constructor(
    private _http:HttpClient
  ) { }

  auth(authType:AuthType, data:AuthDTO):Observable<User>{
    return this._http.post(`${this.api}/${authType}`,data).pipe(
      mergeMap((user:User)=> {this.token = user.token;
        return of(user)
      })
    );
  }

  whoami():Observable<User>{
    return this._http.get<User>(`${this.api}/whoami`,{
      headers: { authorization: `Bearer ${this.token}`}
    })
  }

  get token():string{
    return localStorage.getItem("token_idea")
  }

  set token(token_idea:string){
    if(token_idea){
      localStorage.setItem("token_idea", token_idea)
    }else{
      localStorage.clear()
    }
  }
}
