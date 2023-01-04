import { createContext } from 'react'

export interface PlacesContextProps {
  isLoading: boolean
  userLocation?: [number, number]
}

export const PlaceContext = createContext<PlacesContextProps>({} as PlacesContextProps)
