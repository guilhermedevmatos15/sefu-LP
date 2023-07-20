import React from 'react';
import PropTypes from 'prop-types';

// * style
import './Logo.scss';


const Logo = ({ display, size, colorText }) => {

   const style = {
      display: display ? display : 'block',
      fontSize: size ? size : '1rem',
      color: colorText ? colorText : 'white',
   }

   return (
      <h2 className="Logo" style={style}>
         Sefu
      </h2>
   );
};

Logo.propTypes = {
   display: PropTypes.string,
   size: PropTypes.string.isRequired,
   colorText: PropTypes.string.isRequired,
};

export default Logo;
