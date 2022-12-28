import { useEffect, useReducer } from "react"
import { PlaceContext } from "./PlacesContext"
import { placesReducer } from "./placesReducer"
import { getUserLocation } from "../../helpers/getUserLocation"

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
}

interface PlacesProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: PlacesProviderProps) => {

const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(() => {
    getUserLocation()
    .then( longLa => dispatch({type: 'setUserLocation', payload: longLa}))    
  }, [])
  

  return (
    <PlaceContext.Provider value={{...state,}}>
        {children}
    </PlaceContext.Provider>
  )
}
