import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;
  
  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId]);
  
  
  
  if(!movie.title){
      return <h1>Loading...</h1>;
  };

  const genresArray = movie.genres.map((genre) => <span key={genre}>{genre}</span>);


  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Duration: {movie.time} minutes</p>
        {genresArray}
      </main>
    </>
  );
};

export default Movie;
