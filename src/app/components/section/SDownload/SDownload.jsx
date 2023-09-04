import React, { memo } from 'react';

// * components
import ButtonStore from '../../shared/ButtonStore/ButtonStore';

// * style
import './SDownload.scss';

// * scripts

// * contexts

// * img
import SmartFone from '../../../assets/img/celular.png';

// * icons

const SDownload = () => {
   return (
      <section className="SDownload" id='download'>
         <aside className="image">
            <img src={SmartFone} alt="smartfone/celular" />
         </aside>
         <article className="content">
            <h2>
               Download our mobile <span>app</span>
            </h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
               voluptas odit nisi necessitatibus quisquam veritatis, omnis.
            </p>

            <div className="btns">
               <ButtonStore plataform='google' />
               <ButtonStore plataform='apple' />
            </div>
         </article>
      </section>
   );
};

export default memo(SDownload);
