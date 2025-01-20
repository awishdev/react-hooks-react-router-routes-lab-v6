import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import DirectorCard from "../components/DirectorCard";

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
  }, [])

  const articleArray = directors.map((director) => {
    //console.log(director)
    return(<DirectorCard key={director.id} name={director.name} movies={director.movies} />)
  })

  console.log(articleArray)

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {articleArray}
      </main>
    </>
  );
};

export default Directors;
