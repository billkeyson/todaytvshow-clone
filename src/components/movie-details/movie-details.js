import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MoviesContextProvider } from "../../context/movies-context";
import YouTube from "react-youtube";
import "./movie-detail.module.css";
function MovieDetail() {
  const movie = useContext(MoviesContextProvider);
  const [isLoading, setIsLoading] = useState(true);
  const spliteDate = (date) => {
    return new Date(date);
  };
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    movie
      .getMovieDetail(movieId)
      .then((_) => {
        setIsLoading(false);
      })
      .catch((_) => {
        setIsLoading(false);
      });

    movie.getTrialer(movieId);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="rounded-md p-10 block border text-2xl text-slate-400">
          Loading
        </span>
      </div>
    );
  }
  return (
    <>
      <div className="relative h-[20rem] md:h-[43rem] w-full bg-slate-500">
        <div className="absolute z-30 flex space-x-3 left-4 top-10 flex-col md:flex-row">
            <span className="bg-blue-900 rounded-lg px-4 py-1 shrink-0 font-semibold text-white opacity-50">{movie.movie.title ?? movie.movie.name}</span>
            <span className="bg-blue-900 rounded-lg px-4 py-1 shrink-0 font-semibold text-white opacity-50">{movie.genr}</span>
            
        </div>
        <div className="absolute inset-0 w-full h-full -z-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* <p className='text-white pt-10 z-30 relative'>Stranger Things</p> */}
        <div className='absolute flex flex-col justify-center space-y-2 items-center w-20 h-20 md:w-[15rem] md:h-[15rem] rounded-full border-sky-100 -bottom-7 border-8 z-40 md:-bottom-20 right-6 bg-[url("http://www.todaytvseries2.com/templates/tv_series/images/bluegray/bg-date.svg")] bg-contain bg-no-repeat bg-center text-white text-center shadow'>
          <span className="text-3xl hidden md:inline-block">
            {spliteDate(
              movie.movie.release_date ?? movie.movie.first_air_date
            ).getFullYear()}
          </span>
          <span className="text-5xl font-bold hidden md:inline-block">
            {spliteDate(
              movie.movie.release_date ?? movie.movie.first_air_date
            ).getMonth()}
          </span>
          <span className="text-3xl hidden md:inline-block font-semibold">
            {spliteDate(
              movie.movie.release_date ?? movie.movie.first_air_date
            ).getDay()}
          </span>
        </div>
      </div>

      <div className="w-screen h-full md:px-20 py-10 px-10">
        <div className="bg-white flex mb-2 border-b rounded-tl-md rounded-bl-md overflow-hidden">
          <div className="w-2 bg-blue-700  shrink-0"></div>
          <h2 className="md:text-5xl md:py-10 font-semibold text-gray-700 px-5 py-5 text-5xl flex items-center">
            <span>{movie.movie.title ?? movie.movie.name}</span>
            {/* Watch wideo */}
            <Link to="#trailers">
              <svg
                className="w-[50px] h-[50px] text-red-800"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 10V14C14 14.3 13.8 14.5 13.5 14.5H12.5V9.5H13.5C13.8 9.5 14 9.7 14 10M17 10.5V7C17 6.4 16.6 6 16 6H4C3.4 6 3 6.4 3 7V17C3 17.6 3.4 18 4 18H16C16.6 18 17 17.6 17 17V13.5L21 17.5V6.5L17 10.5M9.5 16H8V12.8H6V16H4.5V8H6V11.2H8V8H9.5V16M15.5 14.5C15.5 15.3 14.8 16 14 16H11V8H14C14.8 8 15.5 8.7 15.5 9.5V14.5Z"
                />
              </svg>
            </Link>
          </h2>
        </div>
        <div className="space-x-2 my-10 flex items-center">
          <span>
            <svg
              className="w-[24px] h-[24px] text-blue-800"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18,13H17.32L15.32,15H17.23L19,17H5L6.78,15H8.83L6.83,13H6L3,16V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V16L18,13M17,7.95L12.05,12.9L8.5,9.36L13.46,4.41L17,7.95M12.76,2.29L6.39,8.66C6,9.05 6,9.68 6.39,10.07L11.34,15C11.73,15.41 12.36,15.41 12.75,15L19.11,8.66C19.5,8.27 19.5,7.64 19.11,7.25L14.16,2.3C13.78,1.9 13.15,1.9 12.76,2.29Z"
              />
            </svg>
          </span>

          <span className="text-md text-slate-400 text-blue-500 font-semibold">
            vote : {movie.movie.vote_count}
          </span>
        </div>
        <div className="container h-full  shadow-orange-200  text-2xl text-slate-600">
          {movie.movie.overview}
        </div>
      </div>
      <div>
        <h2 className="text-center text-5xl " id="trailers">
          Watch Trailer
        </h2>
        <div
          id="trialers"
          className="grid md:grid-cols-2 grid-cols-1 mt-10 mx-10 md:gap-2 mb-10"
        >
          {movie.videos.length > 0 &&
            movie.videos.map((video) => (
              <div className="rounded-md border" key={video.key}>
                <YouTube
                  
                  videoId={video.key}
                  opts={{ width: "800", height: "350" }}
                  style={{
                    right: 0,
                    left: 0,
                    position: "relative",
                    display: "flex",
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
