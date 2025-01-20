import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";


function Home() {

  const [movies, setMovies] = useState([]);

  

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }, [])

  const movieCardHolder = movies.map((movie) => {
    console.log(movie);
    return(
      <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
    )
  });

  return (
    <>
      <header>
        <h1>Home Page</h1>
        <NavBar />
      </header>
      <main>
        {movieCardHolder}
      </main>
    </>
  );
};

export default Home;
