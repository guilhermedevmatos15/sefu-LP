/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Navigation.scss';

// * scripts

// * contexts

// * img

// * icons

const Navigation = ({ direction, gap, colorText, fontSize }) => {

   const style_ul = {
      flexDirection: direction ? direction : 'row',
      gap: gap ? gap : '10px',
      fontSize: fontSize ? fontSize : '1rem',
   }

   const style_link = {
      color: colorText ? colorText : 'white',
   }

   return (
      <nav className="Navigation">
         <ul style={style_ul}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
         </ul>
      </nav>
   );
};

Navigation.propTypes = {
   direction: PropTypes.string.isRequired,
   gap: PropTypes.string.isRequired,
   colorText: PropTypes.string.isRequired,
   fontSize: PropTypes.string.isRequired,
};

export default Navigation;
