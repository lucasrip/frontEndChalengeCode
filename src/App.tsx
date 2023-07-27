import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles/global';
import { ToastContainer } from 'react-toastify';
import Context from './context/index';
import { IuserData } from './types/user';
import { useState } from 'react';

function App() {
const [user,setUser] = useState({} as IuserData);

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
