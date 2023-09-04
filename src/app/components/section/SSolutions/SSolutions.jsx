/* eslint-disable react/jsx-pascal-case */
import React from 'react';
// import PropTypes from 'prop-types';

// * components
import SCards from '../SCards/SCards';

// * style
import './SSolutions.scss';

// * scripts

// * contexts

// * img

// * icons

const SSolutions = () => {
   return (
      <section className="SSolutions" id='s_solutions'>
         <div className='content'>
            <h2>
               You have challenges. Sefu has <span>solutions.</span>
            </h2>
            <p>
               Things go wrong. you haven't questions. We undestand. So we've pople
               don't hand with to help amet
            </p>
            <button>Get a quote now</button>
         </div>
         
         <SCards type='simple' />
      </section>
   );
};

// SSolutions.propTypes = {
//    prop: PropTypes,
// };

export default SSolutions;
