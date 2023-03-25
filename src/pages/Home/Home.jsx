import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import '../../styles/Home.css'

const popularGifs = ['Matrix','Pandas','Anime']

const Home = () => {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    //navegar a otra ruta useLocation -> custon hook
    pushLocation(`/gif/${keyword}`)
  }

  const handleInput = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input onChange={ handleInput } type="text" value={ keyword } placeholder='Search' />
      </form>
      <h3 className='App-title'> Gifs Mas Buscados </h3>
      <div className='gif-nav'>
        {popularGifs.map((popularGifs) => (
          <Link className='link' to={`/gif/${popularGifs}`}> Gifs de {popularGifs} </Link>
        ))}
      </div>
    </>
  )
}

export default Home
