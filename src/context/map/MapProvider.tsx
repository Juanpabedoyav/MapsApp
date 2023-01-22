//@ts-ignore
import { AnySourceData, LngLatBounds, Map, Marker, Popup } from '!mapbox-gl'
import { MapContext } from './MapContext'
import { MapReducer } from './MapReducer'
import { useContext, useEffect, useReducer } from 'react'
import { PlaceContext } from '../places/PlacesContext'
import { directionsApi } from '../../api/directionsApi'
import { DirectionResponse } from '../../interfaces/direction'

export interface MapState {
  isReady: boolean
  map?: Map
  markers?: Marker[]
}
interface MapProviderProps {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: MapState = {
  isReady: false,
  map: undefined,
  markers: []

}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)
  const {places} = useContext(PlaceContext)
  useEffect(() => {
    state.markers?.forEach( marker => marker.remove())
    const newMarkers: Marker[] = []

    for (const place of places) {
      const [long , lat ] = place.center
      const popUp =  new Popup()
        .setHTML(`<h6>${place.place_name}</h6>
        <p>${place.place_name_es}</p>
        `)
      const newMarker = new Marker()
        .setPopup(popUp)
        .setLngLat([long, lat])
        .addTo(state.map!)
      newMarkers.push(newMarker)
    }
    dispatch({type: 'setMarker', payload: newMarkers})
  }, [places])
  

  const setMap = (map: Map) => {
    dispatch({ type: 'setMap', payload: map })
    const locationPopUp = new Popup()
      .setHTML(`
          <h6>You are Here !!!</h6>
          `)
    new Marker({'color': '#b40219' })
      .setLngLat( map.getCenter())
      .setPopup(locationPopUp)
      .addTo(map)
      

  }

  const setDirections = async (start: [number, number], end: [number, number]) =>{
    const res = await directionsApi.get<DirectionResponse>(`/${start.join(',')};${end.join(',')}`)
    const {geometry} = res.data.routes[0]
    const {coordinates: coords} = geometry
    console.log(coords)
    const bounds = new LngLatBounds(
      start,
      start
    )
    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0] , coord[1]]
      bounds.extend(newCoord)
    }
    state.map?.fitBounds(bounds,{
      padding: 180
    })
    // state.map.flyTo({
    //   zoom: 14,
    // })
    //polyline
    const sourceData: AnySourceData =  {
      type:'geojson',
      data:{
        type: 'FeatureCollection',
        features:[
          {
            type:'Feature',
            properties:{},
            geometry:{
              type:'LineString',
              coordinates: coords
            }
          }
        ]
      }

    }
    if(state.map?.getLayer('RouteString')){
      state.map.removeLayer('RouteString')
      state.map.removeSource('RouteString')
      
    }

    state.map?.addSource('RouteString', sourceData )

    state.map?.addLayer({
      id:'RouteString',
      type: 'line',
      source: 'RouteString',
      layout:{
        'line-cap':'square',
        'line-join':'bevel'
      },
      
      paint:{
        'line-color': 'black',
        'line-width' : 4,
      }
    })
  }


  return (
    <MapContext.Provider value={{
      ...state,
      setMap,
      setDirections
    }}
    >
      {children}
    </MapContext.Provider>
  )
}
