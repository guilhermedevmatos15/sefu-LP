import React, { memo } from 'react';
// import PropType from 'prop-types';

// * components
import Form from '../../shared/Form/Form';

// * style
import './SPlan.scss';

// * scripts

// * contexts

// * img

// * icons

const SPlan = () => {
   return (
      <section className="SPlan" id='s_plan'>
         <div>
            <article className="content">
               <h2>
                  Get start & find your <span>plan</span>
               </h2>
               <p>
                  Things go wrong. you haven't questions & we undestand we've
                  pople.
               </p>
               <p>Facing any problem to get a queote! call us now.</p>
               <h3 className="call">1.888.255.436</h3>
            </article>
         </div>

         <aside className="container-form">
            <Form type="complete" />
         </aside>
      </section>
   );
};

// SPlan.propTypes = {
//    prop: PropTypes,
// };

export default memo(SPlan);
