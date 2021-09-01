import BorderCountry from "./BorderCountry"

const CountryInfo = (props) => {
  return (
    <div className="ml-0 lg:ml-8">
      <h2 className="text-3xl font-bold text-darkBlue dark:text-white">
        {props.country.name}
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap my-6">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mr-0 lg:mr-4 mb-4 lg:mb-0 text-darkBlue dark:text-white font-light">
            <span className="my-2">
              <span className="font-semibold">Native Name: </span>
              { props.country.nativeName }
            </span>
            <span className="my-2">
              <span className="font-semibold">Population: </span>
              { props.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
            </span>
            <span className="my-2">
              <span className="font-semibold">Region: </span>
              { props.country.region }
            </span>
            <span className="my-2">
              <span className="font-semibold">Sub Region: </span>
              { props.country.subregion }
            </span>
            <span className="my-2">
              <span className="font-semibold">Capital: </span>
              { props.country.capital }
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col ml-0 lg:ml-4 mt-4 lg:mt-0 text-darkBlue dark:text-white font-light">
            <span className="my-2">
              <span className="font-semibold">Top Level Domain: </span>
              { props.country.topLevelDomain.join(', ') }
            </span>
            <span className="my-2">
              <span className="font-semibold">Currencies: </span>
              { props.country.currencies.map(e => e.name).join(", ") }
            </span>
            <span className="my-2">
              <span className="font-semibold">Languages: </span>
              { props.country.languages.map(e => e.name).join(", ") }
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3 lg:mt-6">
        <div className="flex flex-wrap items-center">
          <span className="font-semibold text-darkBlue dark:text-white">Border Countries: </span>
          {
            (props.country.borders || []).map((e, i) => (
              <BorderCountry code={e} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CountryInfo