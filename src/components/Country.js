import { Link } from 'react-router-dom'

const Country = ({ country, ...extra }) => {
  return (
    <Link to={`/${country.name.toLowerCase()}`} className="w-full lg:w-1/4" { ...extra }>
      <div className="m-4 bg-white dark:bg-darkBlue shadow rounded-xl">
        <img className="h-48 w-full object-cover rounded-t-xl" src={country.flag} alt={country.name} />
        <div className="px-4 py-6">
          <h3 className="text-darkBlue dark:text-white text-xl font-extrabold mb-4">
            { country.name }
          </h3>
          <div className="flex flex-col text-darkBlue dark:text-white font-light">
            <span className="my-1">
              <span className="font-semibold">Population: </span>
              { country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
            </span>
            <span className="my-1">
              <span className="font-semibold">Region: </span>
              { country.region }
            </span>
            <span className="my-1">
              <span className="font-semibold">Capital: </span>
              { country.capital }
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Country