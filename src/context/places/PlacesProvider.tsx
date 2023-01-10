import { useEffect, useReducer } from 'react'
import { PlaceContext } from './PlacesContext'
import { placesReducer } from './placesReducer'
import { getUserLocation } from '../../helpers/getUserLocation'
import { searchApi } from '../../api/searchApi'
import { Feature, PlaceResponse } from '../../interfaces/places'
export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
  isLoadingPlaces: boolean
  places: Feature[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places:[]
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


  const searchByQuery = async( query: string): Promise<Feature[]> =>{
    if(query.length === 0) {
      dispatch({type: 'setPlace', payload:[]})  
      return []
    }
    if(!state.userLocation) throw new Error ('No es posible acceder a la ubicacion')

    dispatch({type: 'setLoadingPlaces'})

    const resp = await searchApi.get<PlaceResponse>(`${query}.json`,{
      params:{
        proximity: state.userLocation.join(',')
      }
    })
    dispatch({type: 'setPlace', payload: resp.data.features})

    return resp.data.features
  }

  return (
    <PlaceContext.Provider value={{ ...state,
      searchByQuery }}>
      {children}
    </PlaceContext.Provider>
  )
}
