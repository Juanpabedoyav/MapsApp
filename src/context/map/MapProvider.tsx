import { Map } from 'mapbox-gl'
import { MapContext } from './MapContext'
import { MapReducer } from './MapReducer'
import {  useReducer } from 'react'

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



export const MapProvider = ({children}: MapProviderProps) => {

    const [state, dispatch] = useReducer( MapReducer, INITIAL_STATE)

    const setMap =( map: Map) => {
        dispatch({type: 'setMap', payload: map})
    }

  return (
    <MapContext.Provider value={{
        ...state,
        setMap
    }}>
        {children}
    </MapContext.Provider>
  )
}
