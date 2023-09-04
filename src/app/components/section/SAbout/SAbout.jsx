import React from 'react';
// import PropTypes from 'prop-types';

// * components
import Slider from '../../shared/Slider/Slider';
import ClientFeedback from '../../shared/ClientFeedback/ClientFeedback';

// * style
import './SAbout.scss';

// * scripts
import feedbacks from '../../../scripts/feedbacks';

// * contexts

// * img

// * icons

const SAbout = () => {
   return (
      <section className="SAbout" id='s_about'>
         <h2>
            Check what's client say <span>about us</span>
         </h2>

         <Slider items={feedbacks()}>
            {feedbacks().map((item) => (
               <li key={item.name}>
                  <ClientFeedback
                     title={item.title}
                     location={item.location}
                     name={item.name}
                     description={item.description}
                     note={item.note}
                  >
                     <img
                        src={item.image.url}
                        alt={`client ${String(item.name).toLowerCase()}`}
                     />
                  </ClientFeedback>
               </li>
            ))}
         </Slider>
      </section>
   );
};

// SAbout.propTypes = {
//    prop: PropTypes,
// };

export default SAbout;
