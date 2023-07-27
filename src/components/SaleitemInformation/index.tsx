import { Container } from "./styles";

import Afiliado from '../../assets/afiliado.svg'
import Recebido from '../../assets/recebido.svg'
import Pago from '../../assets/pago.svg'
import Produtor from '../../assets/produtor.svg'


interface IaleItemInformation
{
  title:string;
  icon:string;
  value:string;
  count:string;
  index:number;
} 

export default function SaleItemInformation({title,icon,value,count,index}:IaleItemInformation) 
{

  const iconsOptions =[Produtor,Afiliado,Pago,Recebido];
  const valor  =  (Number(value)/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });
  
  return (
   <Container 
   title={title}
   >

     <img 
      src={iconsOptions[index]} 
      alt="icone de exibção"
      title={title}
      />
      <strong>
         {title} 
      </strong>
      <span>
        quantidade : {count}
      </span>
      <span>
        valor total : {valor}
      </span>
      
   </Container>)
}