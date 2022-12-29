import { createContext } from "react";


export interface PlacesContextProps {
    isLoading: boolean
    isLocation?: [number, number]
}

export const PlaceContext = createContext<PlacesContextProps>({} as PlacesContextProps);