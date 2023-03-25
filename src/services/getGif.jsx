
const apikey = 'c1AiZLyTCyDDDpQseotImrISYZUlb5d0'

export  const getGif = ({ keyword = 'morty' } = {}) => {

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=10&rating=g&lang=en`;

  return(
    fetch(apiUrl)
      .then( res => res.json() )
      .then(response =>  {
        const {data = []} = response
        if(Array.isArray(data)){
          const gif = data.map(data => {
            const { images, title, id } = data
            const  url  =  images.downsized_medium.url
            return {title, id, url}
          })
          return gif
        }
      })
      .catch( error => {
        console.log('Error: '+error)
      })
  )
}
