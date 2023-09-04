import React from 'react';
import PropTypes from 'prop-types';

// * components

// * style
import './ClientFeedback.scss';

// * scripts

// * contexts

// * img

// * icons
import { AiFillPlayCircle } from 'react-icons/ai';

const ClientFeedback = ({
   children,
   title,
   description,
   name,
   location,
   note,
}) => {
   return (
      <div className="ClientFeedback">
         <div className="image">{children}</div>
         <div className="content">
            <div className="watch-video" onClick={(e) => {}}>
               <AiFillPlayCircle className="watch-video-icon" />
               <div>
                  <p>
                     Watch <br /> the video
                  </p>
               </div>
            </div>

            <h3>
               {title}, {note} out 10
            </h3>
            <p className="description">{description}</p>
            <p className="client-info">
               {name}, <span className="location">{location}</span>
            </p>
         </div>
      </div>
   );
};

ClientFeedback.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   note: PropTypes.number.isRequired,
};

export default ClientFeedback;
