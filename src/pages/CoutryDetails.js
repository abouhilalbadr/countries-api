import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import CountryInfo from '../components/CountryInfo'

const CoutryDetails = () => {
  const { name } = useParams()
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(resp => resp.json())
      .then(data => {
        setCountry(data && data[0])
      })
  }, [name]);

  return (
    <article className="py-6 lg:py-12">
      <div className="container mx-auto">
        <Link to="/" className="bg-white dark:bg-darkBlue text-darkBlue dark:text-white shadow-lg px-6 py-3 inline-flex items-center">
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
          <span className="ml-2">
            Back
          </span>
        </Link>
        {country && <div className="my-4 lg:my-10 flex flex-col lg:flex-row flex-wrap items-center">
          <div className="w-full lg:w-2/5">
            <img src={country.flag} alt={country.name} />  
          </div>
          <div className="w-full lg:w-3/5">
              <CountryInfo country={country} />
          </div>
        </div>}
      </div>
    </article>
  )
}
export default CoutryDetails