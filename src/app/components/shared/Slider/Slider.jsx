import React from 'react';
import PropTypes from 'prop-types';

import Slide from 'slider-moon';
import 'slider-moon/dist/style.css';

// * components

// * style
import './Slider.scss';

// * scripts

// * contexts

// * img


// * icons

const Slider = ({ items, children }) => {
   return (
      <div className="Slider">
         <Slide
            slideClass={'my-slider'}
            infinite={true}
            bullets={true}
            arrowsNav={true}
            animation={'scale'}
         >
            <div className="slider my-slider">
               <ul className="slider-wrapper">
                  {children}
               </ul>
            </div>
         </Slide>
      </div>
   );
};

Slider.propTypes = {
   items: PropTypes.array.isRequired,
};

export default Slider;
