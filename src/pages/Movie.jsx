/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"

import {useState, useEffect} from 'react'

import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'


import './Movie.css'
import Cards from "../components/Cards"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

  const [info, setInfo] = useState(null)

  const {id} = useParams()
  

  const getDataFilms = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setInfo(data)
  }

  useEffect(() =>{
    const url = `${moviesURL}${id}?${apiKey}`
    getDataFilms(url)
  }, [])

  const formatCurrency = (n) =>{
    return n.toLocaleString("en-US", {
      style:"currency",
      currency: "USD"
    })

  }


  return (
    <div className="movie-page">
    {info && <>
    <Cards movie={info} showLink={false}/>
    <p className="tagline">{info.tagline}</p>
    <div className="info">
      <h3>
        <BsWallet2/> Budget:
      </h3>
      <p>{formatCurrency(info.budget)}</p>
    </div>
    <div className="info">
      <h3>
        <BsGraphUp/> Income:
      </h3>
      <p>{formatCurrency(info.revenue)}</p>
    </div>
    <div className="info">
      <h3>
        <BsHourglassSplit/> Time:
      </h3>
      <p>{info.runtime} minutes</p>
    </div>
    <div className="info description">
      <h3>
        <BsFillFileEarmarkTextFill/> Description:
      </h3>
      <p>{info.overview} </p>
    </div>
    </>}
    </div>
  )
}

export default Movie