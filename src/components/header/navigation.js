import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { MoviesContextProvider } from '../../context/movies-context'

function NavigationHeader(props) {

  const nav = useContext(MoviesContextProvider)
  const changeHandler = (e)=>{
    e.preventDefault()
    const genr = e.target.getAttribute('to')
    if (genr ==='movie'){
      nav.getGenresShows()
    }
    else if(genr ==='tv'){
      nav.getGenresShows('tv')
    }
  }
  return (
    <header className="h-20 bg-slate-700 text-white flex items-center justify-between px-2 w-full hover:border-b">
    {/* Header Logo */}
    <div className="logo w-30 h-full">
      <Link to='/'>
      <img
        src="http://www.todaytvseries2.com/images/positions/logo-Ukraine6.svg"
        alt="LOGO"
        className="w-full h-full"
      />
      </Link>
    </div>
    {/* Header Center Menu */}
    <div className="hidden items-center space-x-10 justify-center w-full md:flex uppercase">
      <div to="movie" onClick={changeHandler} className="hover:cursor-pointer font-semibold">Movies</div>
      <div to="tv" onClick={changeHandler} className="hover:cursor-pointer font-semibold">Tv Shows</div>
      <Link to="#today" className="hover:cursor-pointer font-semibold">Genres</Link>
      <Link to="#today" className="hover:cursor-pointer font-semibold">Today</Link>
    </div>
    {/* SOcial And Search */}
    <div className="flex md:justify-between justify-end space-x-20 w-full">
      {/* Social Icons */}
      <div className="header-social-media flex space-x-2">
        <a href="#facebook" className="inline-block">
          <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
            />
          </svg>
        </a>

        <a href="#twitter">
          <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
            />
          </svg>
        </a>
      </div>
      {/* Search Icon */}
      <div className="search-bar hidden md:flex items-center space-x-2  group justify-end w-fit">
        <input
          type="text"
          className="w-full  border-white bg-gray-700 border-2 outline-none rounded-lg px-3 hidden group-hover:inline-block"
        />
        <svg className="w-[24px] height-[24px]" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </div>
    </div>
  </header>
  )
}

export default NavigationHeader