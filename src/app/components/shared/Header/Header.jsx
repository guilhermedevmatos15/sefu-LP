/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

// * components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

// * style
import './Header.scss';

// * scripts

// * contexts

// * img

// * icons
import { HiMenu } from 'react-icons/hi';

const Header = ({openMenu, setOpenMenu}) => {

   useEffect(() => {
      window.addEventListener('resize', (e) => {
         if (window.innerWidth > 810) {
            setOpenMenu(false);
         }
      });
   }, []);

   return (
      <header className={`Header`}>
         <Logo size="2.2rem" colorText="white" />

         <Navigation
            direction="row"
            gap="40px"
            fontSize="1.1rem"
            colorText="white"
            setOpenMenu={setOpenMenu}
         />

         <button>Get a quote</button>

         <HiMenu
            className="icon-menu"
            onClick={(e) => {
               setOpenMenu(true);
            }}
         />

         <Menu open={openMenu} setOpen={setOpenMenu} />
      </header>
   );
};

// Header.propTypes = {
//    prop: PropTypes,
// };

export default Header;
