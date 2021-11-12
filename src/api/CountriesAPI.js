import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/Config';

function CountriesAPI() {
  const [countries, setCountries] = useState([]);
  const [countriesAll, setCountriesAll] = useState({});
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const getCountries = async (endpoint) => {
    const res = await axios.get(`${API_URL}${endpoint}`);
    if (endpoint === 'all') {
      setCountriesAll(res.data);
    }
    setCountries(res.data);
  };

  useEffect(() => {
    getCountries('all');
  }, []);

  useEffect(() => {
    if (search) {
      getCountries(`name/${search}`);
    }
    if (search === '') {
      getCountries('all');
    }
  }, [search]);

  useEffect(() => {
    if (region) {
      getCountries(`region/${region}`);
    }
    if (region === '') {
      getCountries('all');
    }
  }, [region]);

  return {
    countries: [countries, setCountries],
    countriesAll: [countriesAll, setCountriesAll],
    search: [search, setSearch],
    region: [region, setRegion],
  };
}

export default CountriesAPI;
