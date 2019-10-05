import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const id = window.location.pathname;
 
  useEffect(() => { 
    axios
    .get(`http://localhost:5000/api${id}`)
    .then(response => {
      setMovie(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  console.log(stars);
  return (
    <div className="save-wrapper">
      <MovieCard
      title={title}
      director={director}
      metascore={metascore}
      stars={stars}
      />    
    <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
