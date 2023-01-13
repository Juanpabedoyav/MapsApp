import { useContext } from 'react'
import { PlaceContext } from '../../context/places/PlacesContext'
import { MapContext } from '../../context/map/MapContext'
import { Feature } from '../../interfaces/places'

export const SearchResults = () => {
  const {places, isLoadingPlaces, userLocation} = useContext(PlaceContext)
  const {map, setDirections} = useContext(MapContext)
  
  const handleFlyTo = ( place:Feature) => {
    const [lng, lat] = place.center
    map?.flyTo({
      zoom: 17,
      center: [lng, lat]
    })


  }
  const getRoute = (place:Feature) =>{
    if(!userLocation) return
    const [lnt, lat] = place.center
    
    setDirections(userLocation, [lnt,lat] )
  }

  if(isLoadingPlaces) {
    return <>
      <h6>Loading ...</h6>
    </>

  }

  if(places.length === 0) return <></>

  return (
    <ul>
      {
        places.map( place =>(
          <li
            onClick={() => handleFlyTo( place)} 
            key={place.id}>
            <h5>{place.text}</h5>
            <p>{place.place_name_es}</p>
            <button
              onClick={() => getRoute(place)}
            >direccion</button>
          </li>
        ))
      }
    </ul>
  )
}
