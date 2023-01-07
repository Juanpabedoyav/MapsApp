import { useEffect, useReducer } from 'react'
import { PlaceContext } from './PlacesContext'
import { placesReducer } from './placesReducer'
import { getUserLocation } from '../../helpers/getUserLocation'
import { searchApi } from '../../api/searchApi'

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

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)
  useEffect(() => {
    getUserLocation()
      .then(longLa => dispatch({ type: 'setUserLocation', payload: longLa }))
  }, [])


  const searchByQuery = async( query: string) =>{
    if(query.length === 0) return []
    if(!state.userLocation) throw new Error ('No es posible acceder a la ubicacion')

    const resp = await searchApi.get(`${query}.json`,{
      params:{
        proximity: state.userLocation.join(',')
      }
    })
    console.log(resp.data)
    return resp.data
  }

  return (
    <PlaceContext.Provider value={{ ...state,
      searchByQuery }}>
      {children}
    </PlaceContext.Provider>
  )
}
