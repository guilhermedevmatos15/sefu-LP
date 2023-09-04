import React, { memo } from 'react';
// import PropType from 'prop-types';

// * components
import Form from '../../shared/Form/Form';

// * style
import './SHero.scss';

// * scripts

// * contexts

// * img
import Image from '../../../assets/img/image002.png';

// * icons

const SHero = () => {
   return (
      <main className="SHero" id='s_hero'>
         <div className="content">
            <h1>
               Find your secure <span>future</span> in sefu.
            </h1>

            <p>Helping your prepare times of uncetainty is at the heart of what we do.</p>

            <Form type="simple" />
         </div>

         <div className="image">
            <img src={Image} alt="Illustration" />
         </div>
      </main>
   );
};

// SHero.propTypes = {
//    prop: PropTypes,
// };

export default memo(SHero);
