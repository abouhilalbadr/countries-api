const Search = (props) => {

  const searchByName = (e) => {
    const name = e.target.value;
    const url = (name) ? `https://restcountries.com/v2/name/${name.toLowerCase()}` : 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      props.countriesSearch(data)
    })
  }

  return (
    <div className="relative">
      <input
        className="w-full h-12 rounded shadow pl-12 text-darkGray bg-white placeholder-darkGray dark:bg-darkBlue dark:placeholder-white dark:text-white"
        type="text"
        placeholder="Search for a country..."
        onChange={searchByName}
      />
      <span className="absolute top-0 left-0 h-12 w-12 flex justify-center items-center text-darkGray dark:text-white">
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
      </span>
    </div>
  )
}

export default Search
