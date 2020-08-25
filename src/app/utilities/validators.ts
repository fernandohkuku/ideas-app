import {AbstractControl} from "@angular/forms"


export const validateWhiteSpace =(control:AbstractControl) =>{
  let isWhite = (control.value || "").trim().length===0
  let isValid = !isWhite
  return isValid ? null: {trimmed:true}
}
