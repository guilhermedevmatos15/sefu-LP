/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// ? Libs
import initSmoothScroll from './app/lib/smoothScroll';

function App() {
   useEffect(() => {
      initSmoothScroll(120, 1300);
   }, ['Libs']);

   return (
      <>
         <Outlet />
      </>
   );
}

export default App;
