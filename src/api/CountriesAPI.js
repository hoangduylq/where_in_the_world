import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/Config';

function CountriesAPI() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get(`${API_URL}all`);
      setCountries(res.data);
    };

    getCountries();
  }, []);

  useEffect(() => {
    if (search) {
      const getCountries = async () => {
        const res = await axios.get(`${API_URL}name/${search}`);
        setCountries(res.data);
      };

      getCountries();
    }
  }, [search]);

  useEffect(() => {
    if (region) {
      const getCountries = async () => {
        const res = await axios.get(`${API_URL}region/${region}`);
        setCountries(res.data);
      };

      getCountries();
    }
  }, [region]);

  return {
    countries: [countries, setCountries],
    search: [search, setSearch],
    region: [region, setRegion],
  };
}

export default CountriesAPI;
