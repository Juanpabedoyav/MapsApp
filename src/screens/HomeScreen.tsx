import { ButtonLocation } from '../components/ButtonLocation'
import { MapView } from '../components/MapView'
import { SearchBar } from '../components/SearchBar'

export const HomeScreen = () => {
  return (
    <>
      <MapView />
      <ButtonLocation />
      <SearchBar />
    </>
  )
}
