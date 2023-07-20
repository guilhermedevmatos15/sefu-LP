import React, { memo } from 'react';

// * components
import ButtonStore from '../../shared/ButtonStore/ButtonStore';

// * style
import './S_Download.scss';

// * scripts

// * contexts

// * img
import SmartFone from '../../../assets/img/celular.png';

// * icons

const S_Download = () => {
   return (
      <section className="S_Download">
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

export default memo(S_Download);
