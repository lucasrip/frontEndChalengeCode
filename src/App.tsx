import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles/global';
import { ToastContainer } from 'react-toastify';

function App() {

  return (  
    <>
      <Outlet/>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
      />
      <Footer/>
    </>
  );
}

export default App;
