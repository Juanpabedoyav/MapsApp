import { PlacesProvider } from "./context/places/PlacesProvider"
import { HomeScreen } from "./screens/HomeScreen"

export const MapApp = () => {
  return (
    <PlacesProvider>
        <HomeScreen />
    </PlacesProvider>
  )
}
