import { Map, Marker, Popup } from 'mapbox-gl'
import { MapContext } from './MapContext'
import { MapReducer } from './MapReducer'
import { useReducer } from 'react'

export interface MapState {
  isReady: boolean
  map?: Map
}
interface MapProviderProps {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: MapState = {
  isReady: false,
  map: undefined
}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)

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

  return (
    <MapContext.Provider value={{
      ...state,
      setMap
    }}
    >
      {children}
    </MapContext.Provider>
  )
}
