import { PlaceContext } from "./PlacesContext"

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
  return (
    <PlaceContext.Provider value={INITIAL_STATE}>
        {children}
    </PlaceContext.Provider>
  )
}
