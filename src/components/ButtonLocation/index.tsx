import { useContext } from 'react'
import { MapContext } from '../../context/map/MapContext'
import { PlaceContext } from '../../context/places/PlacesContext'

export const ButtonLocation = () => {
 
  const {map, isReady} = useContext(MapContext)
  const {userLocation} = useContext(PlaceContext)


  const handleClick = () =>{
    if(!isReady) throw new Error('El mapa no esta listo')
    if(!userLocation) throw new Error('Ubicaciçon desconocida')
    
    map?.flyTo({
      center: userLocation,
      zoom:17
    })

  }
 
  return (
    <>
      {
        isReady ?
          <button
            title='Your Location' 
            className='get-location'
            onClick={ handleClick}
          >📍</button>
          :''
      }
    </>
  )
}



