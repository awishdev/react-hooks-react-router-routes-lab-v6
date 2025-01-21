import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
  }, [])

  const articleArray = actors.map((actor) => {
    //console.log(director)
    return(<DirectorCard key={actor.id} name={actor.name} movies={actor.movies} />)
  })


  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {articleArray}
      </main>
    </>
  );
};

export default Actors;
