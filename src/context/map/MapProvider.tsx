import { Map, Marker, Popup } from 'mapbox-gl'
import { MapContext } from './MapContext'
import { MapReducer } from './MapReducer'
import { useContext, useEffect, useReducer } from 'react'
import { PlaceContext } from '../places/PlacesContext'
import { directionsApi } from '../../api/directionsApi'
import { DirectionResponse } from '../../interfaces/direction'

export interface MapState {
  isReady: boolean
  map?: Map
  markers?: Marker[]
}
interface MapProviderProps {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: MapState = {
  isReady: false,
  map: undefined,
  markers: []

}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)
  const {places} = useContext(PlaceContext)
  useEffect(() => {
    state.markers?.forEach( marker => marker.remove())
    const newMarkers: Marker[] = []

    for (const place of places) {
      const [long , lat ] = place.center
      const popUp =  new Popup()
        .setHTML(`<h6>${place.place_name}</h6>
        <p>${place.place_name_es}</p>
        `)
      const newMarker = new Marker()
        .setPopup(popUp)
        .setLngLat([long, lat])
        .addTo(state.map!)
      newMarkers.push(newMarker)
    }
    dispatch({type: 'setMarker', payload: newMarkers})
  }, [places])
  

  const setMap = (map: Map) => {
    dispatch({ type: 'setMap', payload: map })
    const locationPopUp = new Popup()
      .setHTML(`
          <h3>You are Here !!!</h3>
          `)
    new Marker()
      .setLngLat( map.getCenter())
      .setPopup(locationPopUp)
      .addTo(map)

  }

  const setDirections = async (start: [number, number], end: [number, number]) =>{
    const res = await directionsApi.get<DirectionResponse>(`/${start.join(',')};${end.join(',')}`)
    console.log(res)
  }


  return (
    <MapContext.Provider value={{
      ...state,
      setMap,
      setDirections
    }}
    >
      {children}
    </MapContext.Provider>
  )
}
