import { Params, RouterStateSnapshot } from "@angular/router"
import * as fromRouter from "@ngrx/router-store" 

export interface RouterStateUrl{
  url:string,
  queryParams:Params
  params:Params
}


export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
  serialize(souterState:RouterStateSnapshot){
    return{};
  }
}
