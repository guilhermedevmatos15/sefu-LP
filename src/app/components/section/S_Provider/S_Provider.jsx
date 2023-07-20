import React from 'react';
// import PropTypes from 'prop-types';

// * components

// * style
import './S_Provider.scss';

// * scripts

// * contexts

// * img
import Image from '../../../assets/img/image01.png';

// * icons

const S_Provider = () => {
   return (
      <section className="S_Provider">
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

// S_Provider.propTypes = {
//    prop: PropTypes,
// };

export default S_Provider;
