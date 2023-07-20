import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './ButtonStore.scss';

// * scripts

// * contexts

// * img

// * icons
import { BsGooglePlay } from 'react-icons/bs';
import { AiFillApple } from 'react-icons/ai';

const ButtonStore = ({ plataform }) => {
   return (
      <>
         {String(plataform).toLowerCase() === 'google' && (
            <button className="ButtonStore btn-google">
               <div className="btn-icon">
                  <BsGooglePlay className="btn-icon" />
               </div>
               <div className="btn-content">
                  <p>Available on the</p>
                  <h3>Google Play</h3>
               </div>
            </button>
         )}

         {String(plataform).toLowerCase() === 'apple' && (
            <button className="ButtonStore btn-apple">
               <div className="btn-icon">
                  <AiFillApple className="btn-icon" />
               </div>
               <div className="btn-content">
                  <p>Download on the</p>
                  <h3>Apple Store</h3>
               </div>
            </button>
         )}

         {String(plataform).toLowerCase() !== 'google' &&
            String(plataform).toLowerCase() !== 'apple' && (
               <button className="ButtonStore btn-error">Error!</button>
            )}
      </>
   );
};

ButtonStore.propTypes = {
   plataform: PropTypes.string.isRequired,
};

export default ButtonStore;
