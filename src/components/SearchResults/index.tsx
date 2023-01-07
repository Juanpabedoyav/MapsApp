import { useContext } from 'react'
import { PlaceContext } from '../../context/places/PlacesContext'

export const SearchResults = () => {
  const {places, isLoadingPlaces} = useContext(PlaceContext)

  if(isLoadingPlaces) {
    return <>
      <h6>Loading ...</h6>
    </>

  }

  if(places.length === 0) return <></>

  return (
    <ul>
      {
        places.length > 0 &&
        places.map( place =>(
          <li key={place.id}>
            <h5>{place.text}</h5>
            <p>{place.place_name_es}</p>
            <button>direccion</button>
          </li>
        ))
      }
    </ul>
  )
}
