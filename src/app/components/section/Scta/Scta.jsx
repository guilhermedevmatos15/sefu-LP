import React, { memo } from 'react';
// import PropTypes from 'prop-types';

// * components

// * style
import './Scta.scss';

// * scripts

// * contexts

// * img

// * icons

const Scta = () => {
   return (
      <section className="Scta" id='s_cta'>
         <div className="cta-container">
            <h2>
               Ready to take plan? It's just a matter of <span>one clike</span>
            </h2>

            <p>Try it risk free - we don't charge cancellation fees.</p>

            <button type='button'>Ger your free quote</button>
         </div>
      </section>
   );
};

export default memo(Scta);
