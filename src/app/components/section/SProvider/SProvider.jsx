import React from 'react';
// import PropTypes from 'prop-types';

// * components

// * style
import './SProvider.scss';

// * scripts

// * contexts

// * img
import Image from '../../../assets/img/image01.png';

// * icons

const SProvider = () => {
   return (
      <section className="SProvider" id='s_provider'>
         <div className="image">
            <img src={Image} alt="woman" />
         </div>
         <div className="content">
            <h2>
               Surprisingly great ratese{' '}
               <span className="emphasis">provider</span>
            </h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
               culpa sit sunt quam eius.
            </p>
            <p>Ipsum Lorem nulla culpa sit sunt quam eius. Adipisicing elit.</p>
            <button type="button">Get a quote</button>
         </div>
      </section>
   );
};

// SProvider.propTypes = {
//    prop: PropTypes,
// };

export default SProvider;
