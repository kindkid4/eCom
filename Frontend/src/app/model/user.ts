import { UserForLogin } from "./UserBase";

export interface User extends UserForLogin{
  tara?:string,
  judet?:string,
  oras?:string,
  strada?:string,
  numar?:number,
  pfp?:string,
  email?:string;
  mobile?:number;
}
