import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const BorderCountry = ({ code, ...extra }) => {

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)
      .then(resp => resp.json())
      .then(data => {
        setCountry(data)
      })
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    country && <Link
      to={`/${country.name.toLowerCase()}`}
      className="px-6 py-2 m-2 bg-white shadow text-darkBlue dark:bg-darkBlue dark:text-white"
      { ...extra }
    >
      {country.name}
    </Link>
  )
}

export default BorderCountry