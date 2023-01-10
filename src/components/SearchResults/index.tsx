import { useContext } from 'react'
import { PlaceContext } from '../../context/places/PlacesContext'
import { MapContext } from '../../context/map/MapContext'
import { Feature } from '../../interfaces/places'

export const SearchResults = () => {
  const {places, isLoadingPlaces} = useContext(PlaceContext)
  const {map} = useContext(MapContext)
  
  const handleFlyTo = ( place:Feature) => {
    const [lng, lat] = place.center
    map?.flyTo({
      zoom: 17,
      center: [lng, lat]
    })


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
            <button>direccion</button>
          </li>
        ))
      }
    </ul>
  )
}
