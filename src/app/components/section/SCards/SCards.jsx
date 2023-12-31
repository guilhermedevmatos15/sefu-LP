import React from 'react';
import PropTypes from 'prop-types';

// * components
import Card from '../../shared/Card/Card';

// * style
import './SCards.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiFillCar } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { BsFillBagHeartFill } from 'react-icons/bs';
import { BiSolidPlaneTakeOff } from 'react-icons/bi';
import { FaHouseUser } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';

const SCards = ({ type }) => {
   return (
      <>
         {String(type).toLowerCase() === 'complete' && (
            <section className={`SCards cards_complete`} id='s_cards'>
               <Card category="car" type="complete">
                  <AiFillCar className="card-icon" />
               </Card>
               <Card category="life" type="complete">
                  <FaHome className="card-icon" />
               </Card>
               <Card category="health" type="complete">
                  <BsFillBagHeartFill className="card-icon" />
               </Card>
            </section>
         )}

         {String(type).toLowerCase() === 'simple' && (
            <section className={`SCards cards_simple`} id='s_cards'>
               <Card category="quick" type="simple">
                  <BiSolidPlaneTakeOff className="card-icon" />
               </Card>
               <Card category="trusted" type="simple">
                  <FaHouseUser className="card-icon" />
               </Card>
               <Card category="discount" type="simple">
                  <MdDiscount className="card-icon" />
               </Card>
            </section>
         )}
      </>
   );
};

SCards.propTypes = {
   type: PropTypes.string.isRequired,
};

export default SCards;
