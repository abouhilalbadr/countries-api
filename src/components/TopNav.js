import useDarkMode from '../hooks/useDarkMode'

const TopNav = () => {
  const [colorTheme, setTheme] = useDarkMode()
  return (
    <div className="container mx-auto">
      <nav className="flex flex-wrap justify-between py-4">
        <h2 className="text-xl font-bold text-darkBlue dark:text-white">Where in the world?</h2>
        <button
          className="flex items-center text-darkBlue dark:text-white"
          onClick={() => setTheme(colorTheme)}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 512 512">
            <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"/>
          </svg>
          <span className="ml-2"> Dark Mode </span>
        </button>
      </nav>
    </div>
  )
}
export default TopNav