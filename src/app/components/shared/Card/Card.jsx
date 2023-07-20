import React, { memo, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './Card.scss';

// * scripts

// * contexts

// * img

// * icons

const Card = ({ category, type, children }) => {
   const [cardDescription, setCardDescription] = useState('');

   const cardDescriptions = useMemo(() => {
      return {
         car: 'Make yout car secure with our scheme.',
         life: 'Insure your lifw safty with ensure.',
         health: 'Long term saving for your health.',
         quick: 'Get quick and faster support ever.',
         trusted: 'Trusted & handle bt proffessional.',
         discount: 'Save your money and get discount.',
      };
   }, []);

   useEffect(() => {
      switch (category.toLowerCase()) {
         case 'car':
            setCardDescription(String(cardDescriptions.car));
            break;
         case 'life':
            setCardDescription(cardDescriptions.life);
            break;
         case 'health':
            setCardDescription(cardDescriptions.health);
            break;
         case 'quick':
            setCardDescription(cardDescriptions.quick);
            break;
         case 'trusted':
            setCardDescription(cardDescriptions.trusted);
            break;
         case 'discount':
            setCardDescription(cardDescriptions.discount);
            break;
         default:
            setCardDescription(null);
            break;
      }
   }, [
      cardDescriptions.car,
      cardDescriptions.discount,
      cardDescriptions.health,
      cardDescriptions.life,
      cardDescriptions.quick,
      cardDescriptions.trusted,
      category,
   ]);

   return (
      <>
         {type === 'complete' && (
            <article className={`Card card_${category} card_complete`}>
               <span className="card-icon">{children}</span>
               <p className="card-category">{category} Insurance</p>
               <h3 className="card-description">{cardDescription}</h3>
               <p className="card-more-details" title="More Details">
                  <a
                     href="https://github.com/guilhermedevmatos15"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Check more details
                  </a>
               </p>
            </article>
         )}

         {type === 'simple' && (
            <article className={`Card card_${category} card_simple`}>
               <div className="card-container">
                  <span className="card-icon">{children}</span>
               </div>
               <div className="card-content">
                  <p className="card-category">{category} Insurance</p>
                  <h3 className="card-description">{cardDescription}</h3>
               </div>
            </article>
         )}
      </>
   );
};

Card.propTypes = {
   category: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
};

export default memo(Card);
