import { MapProvider } from "./context/map/MapProvider"
import { PlacesProvider } from "./context/places/PlacesProvider"
import { HomeScreen } from "./screens/HomeScreen"
import mapboxgl from 'mapbox-gl'
export const MapApp = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnBhYmVkb3lhdiIsImEiOiJjbGM4bXUweDkwZ2k1M3ZwMWVhNjgxajFiIn0.5hZEOnz_IkRGl69SY1xd7Q';

  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
