import React from 'react';
// import PropTypes from 'prop-types';

// * components

// * style
import './Container.scss';

// * scripts

// * contexts

// * img

// * icons

const Container = ({ children }) => {
   return (
      <div className="Container">
         {children}
      </div>
   );
};

// Container.propTypes = {
//    prop: PropTypes,
// };

export default Container;
