import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import './MainPage.scss';
import ToolBar from './toolbar/ToolBar';
import Countries from './countries/Countries';
import DetailCountry from './detailcountry/DetailCountry';

function MainPage() {
  const state = useContext(GlobalState);
  const mode = state.mode;

  return (
    <section className={`main-page ${mode}`}>
      <div className='main-page__wrap grid wide'>
        {/* <Countries /> */}
        <Routes>
          <Route
            path='/'
            element={
              <>
                <ToolBar /> <Countries />
              </>
            }
          />
          <Route path='/detail/:id' element={<DetailCountry />} />
        </Routes>
      </div>
    </section>
  );
}

export default MainPage;
