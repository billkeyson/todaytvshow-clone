import React, { useState } from "react";
import  {API_KEY , MOVIE_LINK} from '../config'

export const MoviesContextProvider = React.createContext(
    {
        movies :[], 
        movie :{},
        sports : [],
        genr:'',
        videos :[],
        getTrialer:(id)=>{},
        findAMovieById :(id)=>{},
        findShowByid : (id)=>{},
        getGenresShows :(genre_type='movie')=>{},
        getMovieDetail : (mveId)=>{}
    }
)

const MoviesContext = (props)=>{

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})
    const [genr, setGenr] = useState('discover/movie')
    const [videos, setVideos] = useState([])

    const getGenresShows = (genre_type='movie')=>{
        if(genre_type === 'tv' ){
            setGenr('discover/tv')
        }else if(genre_type === 'movie'){
            setGenr('discover/movie')
        }
        const movies_url = `${MOVIE_LINK}/${genr}?api_key=${API_KEY}&language=en-US` 
        return fetch(movies_url).then(resp=> resp.json()).then(result=>{
            setMovies(result.results)
        })     
    }
    const getMovieDetail  =(movieId)=>{
        let d_genr= 'movie'
        if(genr !=='discover/movie'){
            d_genr ='tv'
        }
        const detail_url =`${MOVIE_LINK}/${d_genr}/${movieId}?api_key=${API_KEY}&language=en-US&include_video=true`
       return fetch(detail_url)
        .then(response=>response.json())
        .then(result=>{
            // console.log(result)
            setMovie(result)})
    }
    
    const getTrialer = (movieId)=>{
        let d_genr= `/movie/${movieId}/videos`
        if(genr !=='discover/movie'){
            d_genr =`/tv/${movieId}/videos`}

            const video_url =`${MOVIE_LINK}${d_genr}?api_key=${API_KEY}&language=en-US&include_video=true`
            return fetch(video_url)
             .then(response=>response.json())
             .then(result=>{
                //  console.log(result)
                 setVideos(result.results)})
         }
        
    return (
        <MoviesContextProvider.Provider value={{movies:movies,movie,videos, genr,getGenresShows:getGenresShows , getMovieDetail,getTrialer }}>
            {props.children}
        </MoviesContextProvider.Provider>
    )
}

export default MoviesContext






