import Header from "./components/header"
import Card from "./components/card"
import { useState, useEffect } from 'react'
export default function App() {
  const [dataMovie, setDataMovie] = useState([])

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=245333fd&s=Ultraman")
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setDataMovie(data.Search)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  const searchMovie = (text) => {
    console.log(text, '=.=.=.=.=');
    fetch(`https://www.omdbapi.com/?apikey=245333fd&s=${text}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setDataMovie(data.Search)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div>
      <Header searchMovie={searchMovie} />
      <div className="flex flex-wrap" style={{display: 'flex',
      justifyContent: 'center',
    gap: 20}}>
      {
        dataMovie.map((movie, i) => <Card key={i} movie={movie} />)
      }
    </div>
    </div >
  )
}