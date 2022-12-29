import { createContext } from "react";
import { Map } from 'mapbox-gl'


export interface MapContextProps {
    isReady: boolean
    map?: Map

}

export const MapContext = createContext({} as MapContextProps ) 