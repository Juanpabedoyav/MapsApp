import { useContext, useRef } from "react"
import { PlaceContext } from "../../context/places/PlacesContext"
import { Loading } from "../Loading"

export const MapView = () => {
 const {isLoading, userLocation} = useContext(PlaceContext)
const mapDiv = useRef<HTMLDivElement>(null)
if(!!isLoading) return <><Loading/></>

  return (
    <div ref={mapDiv}>{
        
        userLocation?.join(',')
        
        }</div>
  )
}
