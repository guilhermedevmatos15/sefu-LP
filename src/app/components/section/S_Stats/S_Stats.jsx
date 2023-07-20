import React, { memo } from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './S_Stats.scss';

// * scripts

// * contexts

// * img

// * icons

const S_Stats = ({ type }) => {
   return (
      <>
         {String(type).toLowerCase() === 'loveus' && (
            <section className={`S_Stats stats_${type.toLowerCase()}`}>
               <h2>
                  300k+ trsted user & they <span>love us.</span>
               </h2>
               <p>
                  Helping you pre times uncertainty is at the what we do. lorem
                  finding.
               </p>
            </section>
         )}

         {String(type).toLowerCase() === 'data' && (
            <section className={`S_Stats stats_${type.toLowerCase()}`}>
               <div className='data'>
                  <h3 className='data-title'>750+</h3>
                  <p className='data-description'>Billion Covarage</p>
               </div>
               <div className='data'>
                  <h3 className='data-title'>13m</h3>
                  <p className='data-description'>Worldwide Customers</p>
               </div>
               <div className='data'>
                  <h3 className='data-title'>24/7</h3>
                  <p className='data-description'>Support</p>
               </div>
            </section>
         )}
      </>
   );
};

S_Stats.propTypes = {
   type: PropTypes.string.isRequired,
};

export default memo(S_Stats);
