import React, { useContext } from 'react';
import Search from '../../../assets/icons/search.svg';
import './toolbar.scss';
import { GlobalState } from '../../../GlobalState';

function ToolBar() {
  const state = useContext(GlobalState);
  const [search, setSearch] = state.countriesAPI.search;
  const [, setRegion] = state.countriesAPI.region;

  return (
    <div className='toolbar'>
      <div className='toolbar__search'>
        <img src={Search} alt='' />
        <input
          type='text'
          placeholder='Search for a country...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        name='region'
        className='toolbar__filter'
        onChange={(e) => setRegion(e.target.value)}>
        <option value=''>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='americas'>Americas</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  );
}

export default ToolBar;
