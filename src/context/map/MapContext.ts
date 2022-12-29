import { createContext } from "react";
import { Map } from 'mapbox-gl'


export interface MapContextProps {
    isReady: boolean
    map?: Map
    setMap: (map: Map) => void
}

export const MapContext = createContext({} as MapContextProps ) 