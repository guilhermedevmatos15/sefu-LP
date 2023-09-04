import React, { memo } from 'react';

// * components

// * style
import './Footer.scss';

// * scripts

// * contexts

// * img

// * icons

const Footer = () => {
   return (
      <section className="Footer">
         <div>
            <div className="footer-column">
               <p className="footer-column-title">Sefu</p>

               <p className="footer-column-data">sefu@sefu.com</p>
               <p className="footer-column-data">+999 999-9999</p>
            </div>

            <div className="footer-column">
               <p className="footer-column-title">Links</p>

               <p className="footer-column-data"><a href="#s_hero">Hero</a></p>
               <p className="footer-column-data"><a href="#s_stats">Stats</a></p>
               <p className="footer-column-data"><a href="#s_cards">Cards</a></p>
               <p className="footer-column-data"><a href="#s_provider">Provider</a></p>
               <p className="footer-column-data"><a href="#s_download">Download</a></p>
               <p className="footer-column-data"><a href="#s_plan">Plan</a></p>
               <p className="footer-column-data"><a href="#s_news">News</a></p>
            </div>

            <div className="footer-column">
               <p className="footer-column-title">Help & Support</p>
               
               <p className="footer-column-data">FAQ</p>
               <p className="footer-column-data">Blog</p>
               <p className="footer-column-data">Contact Us</p>
               <p className="footer-column-data">Support</p>
            </div>
         </div>

         <div>
            <p>&copy; Copyright {new Date().getFullYear()} Sefu</p>
            <p>
               Development by{' '}
               <a
                  href="https://github.com/guilhermedevmatos15"
                  target="_blank"
                  rel="noreferrer"
                  title='Go to my gitHub'
               >
                  Guilherme Ferreira
               </a>
            </p>
         </div>
      </section>
   );
};

export default memo(Footer);
