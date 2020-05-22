import React from "react";
import Movie from "./Movie.js";


const MoviesList = props => {
  const moviesArray = props.movies;
  const moviesItems = moviesArray.map((item) =>
   
    <Movie {...item} />
    
  );

  return (
  <div className="row ">{moviesItems}</div>
      
  );
}

export default MoviesList;