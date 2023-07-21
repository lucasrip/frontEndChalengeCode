import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles/global';

function App() {

  return (  
    <>
      
      <Outlet/>
      <GlobalStyle/>
      <Footer/>
    </>
  );
}

export default App;
