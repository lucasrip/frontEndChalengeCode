import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient} from 'react-query';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SubmitFile from './components/SubmitSales.tsx';
import SalesList from './components/Saleslist';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/dashboard',
        element:<Dashboard/>,
        children:[
         {
          path:'/dashboard',
          element: <SubmitFile/>,
         },
         {
          path:'/dashboard/salesList',
          element: <SalesList/>,
         }
        ]
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
