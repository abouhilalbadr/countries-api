import React, { useState, useEffect } from 'react'

// Components
import Search from '../components/Search';
import Filter from '../components/Filter';
import Country from '../components/Country';

const Home = () => {
  const [countries, updateCountries] = useState(null);

  const handleCountries = (newCountries) => {
    updateCountries(newCountries)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(resp => resp.json())
      .then(data => {
        updateCountries(data)
      })
  }, []);

  return (
    <section className="py-4 lg:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between">
          <div className="w-full lg:w-2/5">
            <Search countriesSearch={handleCountries} />
          </div>
          <div className="w-1/5">
            <Filter countriesFilter={handleCountries} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap my-6 -mx-4">
          {(countries || []).map((country, index) => (
            <Country country={country} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Home
