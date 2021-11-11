import React, { useContext } from 'react';
import './header.scss';
import Moon from '../../assets/icons/moon.svg';
import MoonSolid from '../../assets/icons/moon-solid.svg';
import { GlobalState } from '../../GlobalState';

function Header() {
  const state = useContext(GlobalState);
  const mode = state.mode;
  const toggleMode = state.toggleMode;

  return (
    <section className={`header ${mode}`}>
      <section className='grid wide header__wrap'>
        <div className='logo'>Where in the world?</div>
        <div className='switch-mode' onClick={toggleMode}>
          <div className='switch-mode__logo'>
            <img src={Moon} alt='' />
            <img src={MoonSolid} alt='' />
          </div>
          <span>Dark Mode</span>
        </div>
      </section>
    </section>
  );
}

export default Header;
