import React from "react";

function DirectorCard({name, movies}) {

    const directorMovies = movies.map((movie) => <li key={movie}>{movie}</li>)
  
  return (
    <article>
        <h2>{name}</h2>
        <ul>
            {directorMovies}
        </ul>
    </article>
  );
};

export default DirectorCard;