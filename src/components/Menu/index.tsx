import { Container } from "./styles";

import Out from '../../assets/out.svg';
import Hide from "../../assets/hide.svg";
import LogoIcone from '../../assets/logoIco.png';

import { links } from "./links";
import { Link, useNavigate } from "react-router-dom";


interface Imenu
{
  nome?:string;
}
export default function Menu({nome="lucas"}:Imenu) 
{
  const navigate = useNavigate();
  return (
   <Container>
     <header>
      <div>
         <img 
          src={LogoIcone} 
          alt="imagem da logo"
          title="imagem da logo" 
          />
         <img 
          src={Out} 
          alt="click para sair"
          title="click para sair"
          onClick={()=> navigate("/",{state:{user:{}}}) }
          />

      </div>
      <div>
        <p
         title={nome}
        >
          {`user: ${nome}`}
        </p>
      </div>
 
     </header>
     <div>
         {
          links?.map((linkItem,index)=>(
            <Link
             key={linkItem.title+index}
             title={`click para ir para o ${linkItem.title}`}
             to={linkItem.link}
            >
            <img 
             src={linkItem.icon}
             title={`click para ir para o ${linkItem.title}`}
             alt={`click para ir para o ${linkItem.title}`}
             />
            {linkItem.title}
            </Link>
          ))
         }
      </div>
   </Container>)
}