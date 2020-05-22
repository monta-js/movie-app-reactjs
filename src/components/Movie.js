import React from "react";


const Movie = props => {
    console.log(props.rating)

  return (
    <div className="col-4">
      
      <div>
        <img width="200" alt={props.title} src={props.poster} />
        <h2>{props.title} </h2>
        <h2> ({props.year})</h2>
      </div>
      <p className="rating">{props.rating}  <span className="star"></span></p>
    </div>
  );
};


export default Movie;