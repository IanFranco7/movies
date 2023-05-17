import{useState, useEffect} from 'react'
import Cards from '../components/Cards'

import "./MovieGrid.css"


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopMovies(topRatedUrl)
    }, [])
  return (
    <div className='container'>
      <h2 className='title'>Best movies:</h2>
        <div className="movies-container">
            {topMovies.lenght === 0 && <p>Carregando...</p>}
            {topMovies.map((movie) => <Cards key={movie.id} movie={movie}/>)}
        </div>
      
    </div>
  )
}

export default Home