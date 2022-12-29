import { MapProvider } from "./context/map/MapProvider"
import { PlacesProvider } from "./context/places/PlacesProvider"
import { HomeScreen } from "./screens/HomeScreen"
import mapboxgl from 'mapbox-gl'
export const MapApp = () => {

  mapboxgl.accessToken = '<your access token here>';

  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
