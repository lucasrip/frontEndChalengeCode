export interface IfindByFilter
{
  id:string,
  limit?:number,
  offset?:number,
  field?:string;
  order?: string
}

export interface IsendSales
{
  id:string,
  file:FileList
}

export interface Isale
{
  tipo: string;
  data: string;
  produto: string;
  valor: string;
  vendedor: string;
  user_id:string;
}

export interface IsalesData
{
  count:string,
  data: Isale[],
}