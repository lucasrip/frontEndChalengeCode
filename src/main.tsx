import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient} from 'react-query';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '/',
        element:<div><h1>sdsds</h1></div>
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
