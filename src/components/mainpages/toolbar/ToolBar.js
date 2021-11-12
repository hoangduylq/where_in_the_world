import React, { useContext, useEffect, useState } from 'react';
import Search from '../../../assets/icons/search.svg';
import './toolbar.scss';
import { GlobalState } from '../../../GlobalState';

function ToolBar() {
  const state = useContext(GlobalState);
  const [, setSearch] = state.countriesAPI.search;
  const [inputSearch, SetInputSearch] = useState('');
  const [, setRegion] = state.countriesAPI.region;

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(inputSearch);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [inputSearch, setSearch]);

  const onChangeInputSearch = (e) => {
    SetInputSearch(e.target.value);
  };

  const onChangeRegion = (e) => {
    setRegion(e.target.value);
    SetInputSearch('');
  };

  return (
    <div className='toolbar'>
      <div className='toolbar__search'>
        <img src={Search} alt='' />
        <input
          type='text'
          placeholder='Search for a country...'
          value={inputSearch}
          onChange={(e) => onChangeInputSearch(e)}
        />
      </div>

      <select
        name='region'
        className='toolbar__filter'
        onChange={(e) => onChangeRegion(e)}>
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
