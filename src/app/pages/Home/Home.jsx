/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';

// * components
import Header from '../../components/shared/Header/Header';
import Container from '../../components/shared/Container/Container';
import SHero from '../../components/section/SHero/SHero';
import SStats from '../../components/section/SStats/SStats';
import SCards from '../../components/section/SCards/SCards';
import SProvider from '../../components/section/SProvider/SProvider';
import SSolutions from '../../components/section/SSolutions/SSolutions';
import SDownload from '../../components/section/SDownload/SDownload';
import SPlan from '../../components/section/SPlan/SPlan';
import SAbout from '../../components/section/SAbout/SAbout';
import SNews from '../../components/section/SNews/SNews';
import Scta from '../../components/section/Scta/Scta';
import Footer from '../../components/shared/Footer/Footer';

// * style
import './Home.scss';

// * scripts

// * contexts

// * img

// * icons

const Home = () => {
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <div className="Home">
         <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />

         <Container>
            <SHero />
            <SStats type="loveUs" />
            <SCards type="complete" />
            <SProvider />
            <SStats type="data" />
            <SSolutions />
            <SDownload />
            <SPlan />
            <SAbout />
            <SNews />
            <Scta />
         </Container>

         <Footer />
      </div>
   );
};

export default Home;
