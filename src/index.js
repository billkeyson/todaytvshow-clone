import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MoviesContext from './context/movies-context';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavigationHeader from './components/header/navigation';
import MovieDetail from './components/movie-details/movie-details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoviesContext >
    <BrowserRouter>
    <NavigationHeader />
    <Routes>
        <Route path="/" element ={ <App />} exact />
        <Route path="/detail/:movieId" element ={ <MovieDetail />} exact />
        <Route path="/trailers/:movieId" element ={ <MovieDetail />} exact />


      </Routes>
       
    </BrowserRouter>

  </MoviesContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
