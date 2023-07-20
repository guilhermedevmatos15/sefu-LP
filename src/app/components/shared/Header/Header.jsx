import React from 'react';
// import PropTypes from 'prop-types';

// * components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

// * style
import './Header.scss';

// * scripts

// * contexts

// * img

// * icons

const Header = () => {
   return (
      <header className="Header">
         <Logo size='2.2rem' colorText='white' />

         <Navigation direction='row' gap='40px' fontSize='1.1rem' colorText='white' />

         <button>Get a quote</button>
      </header>
   );
};

// Header.propTypes = {
//    prop: PropTypes,
// };

export default Header;
