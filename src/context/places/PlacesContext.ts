import { createContext } from 'react'
import { Feature } from '../../interfaces/places'

export interface PlacesContextProps {
  isLoading: boolean
  userLocation?: [number, number]
  searchByQuery: (query: string) => Promise<Feature[]>
}

export const PlaceContext = createContext<PlacesContextProps>({} as PlacesContextProps)
