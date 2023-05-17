import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Cards from '../components/Cards'

import "./MovieGrid.css"

const Discover = () => {
    const moviesURL = import.meta.env.VITE_DISCOVER
    const apiKey = import.meta.env.VITE_API_KEY

    const {genrer} = useParams()

    const [movies, setMovies] = useState([])
    const [genrerName, setGenrerName] = useState('')

    const buscaPorGenero = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() =>{
        const url = `${moviesURL}?${apiKey}&with_genres=${genrer}`
        buscaPorGenero(url)
    }, [genrer])

    useEffect(() =>{
        const fetchData = async () =>{
            const url = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`
            const res = await fetch(url)
            const data = await res.json()
            const genrerSelected = data.genres.find((genero) => genero.id === parseInt(genrer))
            console.log(genrerSelected)
            setGenrerName(genrerSelected.name)
            
        }
        fetchData()
    },[genrer, genrerName])

   

    
  return (
    <div className="container">
        <h2 className='title'>Results for: <span className='query-text'>{genrerName}</span></h2>
        <div className='movies-container'>
            {movies.length > 0 && movies.map((movie) => (
                <Cards key={movie.id} movie={movie} name={genrerName} />
            ))}
        </div>
    </div>
  )
}

export default Discover