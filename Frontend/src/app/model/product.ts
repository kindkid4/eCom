import { IProductBase } from "./ProductBase";

export class Product implements IProductBase{
  id!: number;
  title!: string;
  price!: number;
  stock!:number;
  categoryType!: string;
  image!: string;
  description!:string;
  qty!: number;
}
