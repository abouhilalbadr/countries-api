import { useState } from 'react'

const Filter = (props) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const setFilter = (region) => {
    fetch(`https://restcountries.com/v2/region/${region.toLowerCase()}`)
    .then(resp => resp.json())
    .then(data => {
      props.countriesFilter(data)
      setOpen(false)
      setActive(region)
      })
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="flex justify-between items-center w-full rounded shadow h-12 px-4 bg-white text-darkBlue dark:text-white dark:bg-darkBlue"
        onClick={() => setOpen(!open)}
      >
        Filter by Region
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      {open && <div
        className="origin-top-right absolute right-0 mt-1 w-64 rounded shadow bg-white text-darkBlue dark:text-white dark:bg-darkBlue"
      >
        <div>
          {regions.map((region, index) => (
            <button
              className={"text-gray-700 text-left w-full px-4 py-3 text-sm " + ((active === region) ? "bg-darkBlueLight text-white" : "")}
              key={index}
              onClick={() => setFilter(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>}
    </div>
  )
}

export default Filter
