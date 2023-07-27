
import { useContext, useEffect } from "react";
import { Outlet,  useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Menu from "../../components/Menu";
import Context from "../../context";
import { Iuser } from "../../types/user";
import { Container } from "./styles";

export default function Dashboard() 
{
  const navigate = useNavigate();
  const {user,setUser}  =useContext(Context);
 
  if(!user)
  {
    navigate("/");
    toast.error("voce precisa estar logado para usar esta pagina");
  }
 
  return (
   <Container>
     <Menu
      nome={user?.nome}
     />
     <main>
      <Outlet context={[user]} />
     </main>
   </Container>)
}