import { Outlet } from 'react-router-dom';
import GlobalStyle from './globalStyles/global';

function App() {

  return (  
    <>
      
      <Outlet/>
      <GlobalStyle/>
    </>
  );
}

export default App;
