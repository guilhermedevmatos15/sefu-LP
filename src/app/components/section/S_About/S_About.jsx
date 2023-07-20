import React from 'react';
// import PropTypes from 'prop-types';

// * components
import Slider from '../../shared/Slider/Slider';

// * style
import './S_About.scss';

// * scripts
import feedbacks from '../../../scripts/feedbacks';

// * contexts

// * img

// * icons

const S_About = () => {
   return (
      <section className="S_About">
         <h2>
            Check what's client say <span>about us</span>
         </h2>

         <Slider items={feedbacks()} />
      </section>
   );
};

// S_About.propTypes = {
//    prop: PropTypes,
// };

export default S_About;
