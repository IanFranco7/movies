import {Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
    
  }


  return (
    <div className='nav'>
      <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/> Movies List</Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Search a movie' onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button type='Submit'>
              <BiSearchAlt2/>
          </button>
        </form>
        
      </nav>
      
        <p>Find by genrer</p>
      <div className="gender_container">
        <ul className='gender'>
          <li><Link to="discover/28" >Action</Link></li>
          <li><Link to="discover/35" >Comedy</Link></li>
          <li><Link to="discover/27" >Horror</Link></li>
          <li><Link to="discover/10749" >Romance</Link></li>
          <li><Link to="discover/878" >Science Fiction</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar