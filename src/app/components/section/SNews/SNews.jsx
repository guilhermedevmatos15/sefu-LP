/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// * components
import News from '../../shared/News/News';

// * style
import './SNews.scss';

// * scripts
import newsApiKey from '../../../utils/newsApiKey';

// * contexts

// * img

// * icons

const SNews = () => {
   const [news, setNews] = useState(null);

   useEffect(() => {
      async function fetchNews() {
         try {
            const myApiURL = newsApiKey.url();

            const response = await fetch(myApiURL);
            let data = await response.json();

            if (data.status === 'ok') {
               data = data.articles.filter((value) =>
                  value.content && value.author ? true : false
               );

               let treeNews = [data[0], data[1], data[2]];
               setNews(treeNews);
            } else {
               throw new Error('Error');
            }
         } catch (e) {
            console.log('Error on API news');
         }
      }

      fetchNews();
   }, ['API']);

   return (
      <section className="SNews" id='s_news'>
         <div className="presentation">
            <h2>
               Get latesest news from <span>sefu.</span>
            </h2>
            <button type="button">Go to Blog</button>
         </div>
         {news && (
            <div>
               <News
                  title={news[0].title}
                  imageURL={news[0].urlToImage}
                  source={news[0].source.name}
               />
               <News
                  title={news[1].title}
                  imageURL={news[1].urlToImage}
                  source={news[1].source.name}
               />
               <News
                  title={news[2].title}
                  imageURL={news[2].urlToImage}
                  source={news[2].source.name}
               />
            </div>
         )}
      </section>
   );
};

// SNews.propTypes = {
//    prop: PropTypes,
// };

export default SNews;
