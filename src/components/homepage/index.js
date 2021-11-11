import React from 'react';
import Header from '../header/Header';
import MainPage from '../mainpages/MainPage';

function HomePage() {
  return (
    <article className='home'>
      <Header />
      <MainPage />
    </article>
  );
}

export default HomePage;
