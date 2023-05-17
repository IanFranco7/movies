/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Cards from '../components/Cards'

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY



import "./MovieGrid.css"
const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get("q")

  const getSearchedMovies = async (url) =>{

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setMovies(data.results)
}

useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
}, [query])
  return (
    <div className='container'>
      <h2 className='title'>
        Results for: <span className="query-text">{query}</span>
      </h2>
        <div className="movies-container">
            {movies.lenght === 0 && <p>Carregando...</p>}
            {movies.map((movie) => <Cards key={movie.id} movie={movie}/>)}
        </div>
  </div>
  
  )
}

export default Search