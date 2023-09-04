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

const Navigation = ({ direction, gap, colorText, fontSize, setOpenMenu }) => {

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
            <li style={style_link} onClick={e => {setOpenMenu(false)}}><a href="#s_provider" style={style_link}>Provider</a></li>
            <li style={style_link} onClick={e => {setOpenMenu(false)}}><a href="#s_solutions" style={style_link}>Solutions</a></li>
            <li style={style_link} onClick={e => {setOpenMenu(false)}}><a href="#s_plan" style={style_link}>Plan</a></li>
            <li style={style_link} onClick={e => {setOpenMenu(false)}}><a href="#s_client" style={style_link}>Client's</a></li>
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
