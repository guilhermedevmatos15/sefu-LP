import React from 'react';

// * components

// * style
import './News.scss';

// * scripts

// * contexts

// * img

// * icons
import { BsArrowRightShort } from 'react-icons/bs';

const News = ({ title, imageURL, source }) => {
   return (
      <article className="News">
         <div className='container-image'>
            <img src={String(imageURL)} alt={title} />
         </div>

         <p className="news-source">{source}</p>

         <h3 className="news-title">{title}</h3>

         <span>
            Continue Reading <BsArrowRightShort />
         </span>
      </article>
   );
};

export default News;
