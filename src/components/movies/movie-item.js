import React from 'react'
import {Link} from 'react-router-dom'
function MovieItem({movie}) {
  return (
    <div className="w-full border h-auto flex flex-col cursor-pointer">
    {/* movie logo */}
    <div className="relative w-full group">
    <span className="absolute text-white text-center py-2 opacity-80 font-2 bottom-16 font-extrabold z-30 bg-slate-600 hidden group-hover:inline-block w-full">{movie.release_date ?? movie.first_air_date}</span>
      <img
        className="w-full opacity-45 z-20"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie logo"
      />
    </div>
  {/* Item button info */}
    <div className="bg-gray-800 opacity-50 p-4">
      <div className="text-center">
        <p className="text-white font-semibold">{movie.title ?? movie.name}</p>
        <Link to={`/detail/${movie.id}`}
          className="mt-3 inline-block border-gray-300 opacity-60 text-slate-100 px-3 py-2 rounded-md border hover:bg-black hover:text-white"
        >
          Download
        </Link>
      </div>
    </div>
  </div>
  )
}

export default MovieItem