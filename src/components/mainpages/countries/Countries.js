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
      {countries.map((country, index) => (
        <div className=' col c-3' key={index}>
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
      ))}

      {/* <div className=' col c-3'>
        <div className='country'>
          <div className='country__img'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/338px-Flag_of_Vietnam.svg.png'
              alt=''
            />
          </div>
          <div className='country__info'>
            <h2 className='country__info__name'>Viet Nam</h2>

            <div>
              <h6>Population:</h6>
              <span>81,770,900</span>
            </div>
            <div>
              <h6>Region:</h6>
              <span>Asian</span>
            </div>
            <div>
              <h6>Captital:</h6>
              <span>Ha Noi</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Countries;
