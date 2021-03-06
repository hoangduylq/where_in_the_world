import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import './detailcountry.scss';

function DetailCountry() {
  const state = useContext(GlobalState);
  const [countries] = state.countriesAPI.countries;
  const [countriesAll] = state.countriesAPI.countriesAll;
  const params = useParams();
  const [detailCountry, setDetailCountry] = useState([]);
  const contriesByCode = useRef({});

  useEffect(() => {
    countriesAll.forEach((country) => {
      contriesByCode.current = {
        ...contriesByCode.current,
        [country.alpha3Code]: country.name,
      };
    });
  }, [countriesAll]);

  useEffect(() => {
    if (params.id) {
      countries.forEach((country) => {
        if (Number(country.callingCodes) === Number(params.id)) {
          setDetailCountry(country);
        }
      });
    }
  }, [params.id, countries]);

  if (detailCountry.length === 0) return null;

  const showBorderCountries = () => {
    if (detailCountry) {
      return detailCountry.borders.map((borderCountry, index) => (
        <span key={index}>{contriesByCode.current[borderCountry]}</span>
      ));
    }

    return '';
  };

  return (
    <>
      <Link to='/' className='back-home'>
        <img src={ArrowLeft} alt='' />
        Back
      </Link>
      <div className='row detail'>
        <div className='detail__img col c-12 l-6 m-6'>
          <img src={detailCountry.flag} alt='' />
        </div>
        <div className='detail__info col c-12 l-6 m-6'>
          <h2 className='detail__info__name'>{detailCountry.name}</h2>
          <div className='detail__info__list'>
            <div className='detail__info__list__left'>
              <div className='detail__info__item'>
                <h6>Native Name:</h6>
                <span>{detailCountry.nativeName}</span>
              </div>
              <div className='detail__info__item'>
                <h6>Population:</h6>
                <span>{detailCountry.population}</span>
              </div>
              <div className='detail__info__item'>
                <h6>Regigon:</h6>
                <span>{detailCountry.region}</span>
              </div>
              <div className='detail__info__item'>
                <h6>Sub Region:</h6>
                <span>{detailCountry.subregion}</span>
              </div>
              <div className='detail__info__item'>
                <h6>Captital:</h6>
                <span>{detailCountry.capital}</span>
              </div>
            </div>

            <div className='detail__info__list__right'>
              <div className='detail__info__item'>
                <h6>Top level Domain:</h6>
                <span>{detailCountry.topLevelDomain}</span>
              </div>
              <div className='detail__info__item'>
                <h6>Currencies:</h6>
                {detailCountry.currencies.map((currency, index) => (
                  <span key={index}>{currency.name},</span>
                ))}
              </div>
              <div className='detail__info__item'>
                <h6>Languages:</h6>
                {detailCountry.languages.map((language, index) => (
                  <span key={index}>{language.name}, </span>
                ))}
              </div>
            </div>
          </div>

          <div className='detail__info__border_countries'>
            <h6>Border Countries:</h6>
            {showBorderCountries()}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCountry;
