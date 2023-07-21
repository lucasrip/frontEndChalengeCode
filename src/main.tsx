import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient} from 'react-query';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './components/Home';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '/',
        element:<Home/>
      }
    ] 
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
);
