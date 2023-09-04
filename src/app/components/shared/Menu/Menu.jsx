import React from 'react';

// * components
import Navigation from '../Navigation/Navigation';

// * style
import './Menu.scss';

// * scripts

// * contexts

// * img

// * icons
import { FaXmark } from 'react-icons/fa6';

const Menu = ({ open, setOpen }) => {
   return (
      <div className={`Menu ${open === true ? 'active' : 'disable'}`}>
         <FaXmark
            className="icon-close"
            onClick={(e) => {
               setOpen(false);
            }}
         />

         <div>
            <Navigation
               colorText="white"
               direction="column"
               fontSize="1.7rem"
               gap="60px"
            />
         </div>
      </div>
   );
};

export default Menu;
