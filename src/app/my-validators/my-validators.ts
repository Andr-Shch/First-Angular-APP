import { FormControl } from "@angular/forms";

export class MyValidators {

   static forbidenName(control:FormControl):{[key:string]:boolean}|null{
        if(['Srar Wars', 'star'].includes(control.value)){
            return{
                NoStarWars: true
            }
        }
      return null
   }

}