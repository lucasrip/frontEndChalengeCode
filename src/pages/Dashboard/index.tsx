
import { useContext } from "react";
import { Outlet} from "react-router-dom";
import { toast } from "react-toastify";
import Menu from "../../components/Menu";
import Context from "../../context";
import { Container } from "./styles";

export default function Dashboard() 
{
  
  const {user,setUser}  =useContext(Context);
  
  return (
   <Container>
     <Menu
      nome={user?.nome}
     />
     <main>
      <Outlet />
     </main>
   </Container>)
}