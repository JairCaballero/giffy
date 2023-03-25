import React from 'react'
import Gif from '../../components/Gif'
import { useGifs } from '../../hooks/useGifs'

export const ListOfGifs = ({ params }) => {

  const { keyword } = params //-> el router nos devuelve un obj con param donde se encuentra el key
  const { loading, gifs } = useGifs({ keyword });

  if(loading) return <i>Loadin</i>

  return <>
    {
      gifs.map(({ id, title,url }) =>
        <Gif key={id} title={title} id={id} url={url} />
      )
    }
  </>
}