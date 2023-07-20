import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * Components
import App from './App';
import Home from './app/pages/Home/Home';

const Routes = (props) => {
   const Router = createBrowserRouter([
      {
         path: '/',
         element: <App />,
         children: [
            {
               path: '/',
               element: <Home />
            }
         ]
      }
   ]);

   return <RouterProvider router={Router} />;
};

export default Routes;
