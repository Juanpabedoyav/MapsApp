import { createContext } from 'react'
//@ts-ignore
import { Map } from '!mapbox-gl'
export interface MapContextProps {
  isReady: boolean
  map?: Map
  setMap: (map: Map) => void
  setDirections: (start: [number, number], end: [number, number]) => Promise<void>
}
export const MapContext = createContext({} as MapContextProps)
