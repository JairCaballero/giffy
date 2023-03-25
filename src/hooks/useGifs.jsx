import { useState, useEffect } from 'react'
import { getGif } from '../services/getGif'

export const useGifs = ({ keyword }) => {

  const [gifs, setGift] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    setLoading(true)
    getGif({ keyword})
    .then(gifts => {
      setGift(gifts)
      setLoading(false)
    })

  }, [keyword]) /* -> como ase que los gifs canvien es la dependencia del efecto, sino no se renderisa al canviarlo si agrego un boton que lo canvie*/

  return { loading, gifs }
}
