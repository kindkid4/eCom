import { UserForRegister } from "./UserBase";

export interface User extends UserForRegister{
  tara?:string,
  judet?:string,
  oras?:string,
  strada?:string,
  numar?:number,
  pfp?:string,
}
