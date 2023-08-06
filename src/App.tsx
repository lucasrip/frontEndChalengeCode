import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles/global';
import { toast, ToastContainer } from 'react-toastify';
import Context from './context/index';
import { IuserData } from './types/user';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
const [user,setUser] = useState({} as IuserData);

const location = useLocation();
const navigate = useNavigate();

useEffect(()=>{
  
  if(!user.id && location.pathname != "/")
  {
    navigate("/");
    toast.error("voce precisa estar logado para usar esta pagina");
  } 

},[])

  return (  
    <Context.Provider value={{user,setUser}}>
      <Outlet/>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
      />
      <Footer/>
    </Context.Provider>
  );
}

export default App;
