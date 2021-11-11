import React, { useContext } from 'react';
import './countries.scss';
import { GlobalState } from '../../../GlobalState';

function Countries() {
  const state = useContext(GlobalState);
  const [countries] = state.countriesAPI.countries;

  function getFormattedNumber(num) {
    if (num === '-') {
      return '';
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
  }

  return (
    <div className='countries row'>
      {!countries.status ? (
        countries.map((country, index) => (
          <div className=' col c-12 l-3 m-6' key={index}>
            <div className='country'>
              <div className='country__img'>
                <img src={country.flags.svg} alt='' />
              </div>
              <div className='country__info'>
                <h2 className='country__info__name'>{country.name}</h2>

                <div>
                  <h6>Population:</h6>
                  <span>{getFormattedNumber(country.population)}</span>
                </div>
                <div>
                  <h6>Region:</h6>
                  <span>{country.region}</span>
                </div>
                <div>
                  <h6>Captital:</h6>
                  <span>{country.capital}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className='not-found'>Not Found</h1>
      )}
    </div>
  );
}

export default Countries;
