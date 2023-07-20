/* eslint-disable react/jsx-pascal-case */
import React from 'react';
// import PropTypes from 'prop-types';

// * components
import S_Cards from '../S_Cards/S_Cards';

// * style
import './S_Solutions.scss';

// * scripts

// * contexts

// * img

// * icons

const S_Solutions = () => {
   return (
      <section className="S_Solutions">
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
         
         <S_Cards type='simple' />
      </section>
   );
};

// S_Solutions.propTypes = {
//    prop: PropTypes,
// };

export default S_Solutions;
