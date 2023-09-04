import React, { memo } from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './SStats.scss';

// * scripts

// * contexts

// * img

// * icons

const SStats = ({ type }) => {
   return (
      <>
         {String(type).toLowerCase() === 'loveus' && (
            <section className={`SStats stats_${type.toLowerCase()}`} id='s_stats'>
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
            <section className={`SStats stats_${type.toLowerCase()}`} id='s_stats'>
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

SStats.propTypes = {
   type: PropTypes.string.isRequired,
};

export default memo(SStats);
