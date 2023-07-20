/* eslint-disable react/jsx-pascal-case */
import React from 'react';

// * components
import Header from '../../components/shared/Header/Header';
import Container from '../../components/shared/Container/Container';
import S_Hero from '../../components/section/S_Hero/S_Hero';
import S_Stats from '../../components/section/S_Stats/S_Stats';
import S_Cards from '../../components/section/S_Cards/S_Cards';
import S_Provider from '../../components/section/S_Provider/S_Provider';
import S_Solutions from '../../components/section/S_Solutions/S_Solutions';
import S_Download from '../../components/section/S_Download/S_Download';
import S_Plan from '../../components/section/S_Plan/S_Plan';
import S_About from '../../components/section/S_About/S_About';

// * style
import './Home.scss';

// * scripts

// * contexts

// * img

// * icons

const Home = () => {
   return (
      <div className="Home">
         <Header />

         <Container>
            <S_Hero />
            <S_Stats type='loveUs' />
            <S_Cards type='complete' />
            <S_Provider />
            <S_Stats type='data' />
            <S_Solutions />
            <S_Download />
            <S_Plan />
            <S_About />
         </Container>
      </div>
   );
};

export default Home;
