import React, { useContext } from 'react';
import ToolBar from './toolbar/ToolBar';
import Countries from './countries/Countries';
import './MainPage.scss';
import { GlobalState } from '../../GlobalState';

function MainPage() {
  const state = useContext(GlobalState);
  const mode = state.mode;

  return (
    <section className={`main-page ${mode}`}>
      <div className='main-page__wrap grid wide'>
        <ToolBar />
        <Countries />
      </div>
    </section>
  );
}

export default MainPage;
