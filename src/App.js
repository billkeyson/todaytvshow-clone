import { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieItem from "./components/movies/movie-item";
import NavigationHeader from "./components/header/navigation";
import { MoviesContextProvider } from "./context/movies-context";
import HomeHeader from "./components/header/home-header";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const genre_shows = useContext(MoviesContextProvider);
const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    console.log(genre_shows.genr)
    genre_shows.getGenresShows(genre_shows.genr).then(_=>{
      setIsLoading(false)
    }).catch(_=>{
      setIsLoading(false)
    });
    console.log('eff')
    return ()=>{
    }
  }, []);


  if(isLoading){
    return <div className="flex justify-center items-center h-screen"><span className="rounded-md p-10 block border text-2xl text-slate-400">Loading</span></div>
  }
  if(genre_shows.movies.length <1){
    return <div className="flex justify-center items-center h-screen"><span className="rounded-md p-10 block border text-2xl text-slate-400">Movies Available Check again Later</span></div>
  }
  return (
    <div className="overflow-x-hidden bg-slate-700 ">
      
      {/* Main Content */}
      <div className="my-1">
        {genre_shows.movies.length >0 && ( <HomeHeader header = {genre_shows.movies[1]} />)}
       
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-3 xl:grid-cols-4">
          {/* Content Item */}
          {genre_shows.movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </main>

        <div className="flex justify-center items-center  rounded-lg w-min mx-auto  mt-10 mb-10 space-x-2 overflow-hidden">
          <div className="h-19 px-4 py-2 bg-green-500 text-xl text-white hover:bg-red-300 duration-400 cursor-pointer transition">Prev</div>
          <div className="h-19 px-4 py-2 bg-green-500 text-xl text-white hover:bg-red-300 duration-400 cursor-pointer transition">Next</div>
        </div>
      </div>
    </div>
  );
}

export default App;
