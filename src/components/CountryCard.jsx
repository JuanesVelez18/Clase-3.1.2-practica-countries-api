import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader/Loader';

const CountryCard = ({ countryName }) => {
  const [country, setCountry] = useState(null);

  // Funcion que solicita los datos del pais
  const loadCountryData = async () => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    try {
      const res = await axios.get(url);

      setCountry(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCountryData();
  }, [countryName]);

  return (
    <>
      {country ? (
        <article className="w-8/12 min-h-[400px] p-6 bg-cyan-300 rounded-lg text-black">
          <div className="border-black border-">
            <img src={country.flags.svg} alt={country.flags.alt} />
          </div>
          <h2 className="text-4xl mt-5">{country.name.common}</h2>
          <ul className="mt-5">
            <li>Population: {country.population} inhabitants</li>
            <li>Capital: {country.capital}</li>
            <li>Continent: {country.subregion}</li>
          </ul>
        </article>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CountryCard;
