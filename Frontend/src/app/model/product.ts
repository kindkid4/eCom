import { IProductBase } from "./ProductBase";

export class Product implements IProductBase{
  id!: number;
  title!: string;
  price!: number;
  stock!:number;
  categoryType!: string;
  images!: string;
  primaryImage!:string;
  description!:string;
  qty!: number;
}
