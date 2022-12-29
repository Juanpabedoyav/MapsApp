import { useContext } from "react"
import { PlaceContext } from "../../context/places/PlacesContext"
import { Loading } from "../Loading"

export const MapView = () => {
 const {isLoading, userLocation} = useContext(PlaceContext)

if(!!isLoading) return <><Loading/></>

  return (
    <div>{
        
        userLocation?.join(',')
        
        }</div>
  )
}
