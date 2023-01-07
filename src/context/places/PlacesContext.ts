import { createContext } from 'react'

export interface PlacesContextProps {
  isLoading: boolean
  userLocation?: [number, number]
  searchByQuery: (query: string) => Promise<any>
}

export const PlaceContext = createContext<PlacesContextProps>({} as PlacesContextProps)
