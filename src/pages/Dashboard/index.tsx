
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Menu from "../../components/Menu";
import { Container } from "./styles";

export default function Dashboard() 
{
  const location = useLocation();
  const navigate = useNavigate();

useEffect(()=>{
  if(!location.state?.user)
  {
    navigate("/");
    toast.error("voce precisa estar logado para usar esta pagina");
 
  }
  
   
},[])

  return (
   <Container>
     <Menu/>
     <main>
      <Outlet/>
     </main>
   </Container>)
}