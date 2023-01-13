import { PlacesState } from './PlacesProvider'
import { Feature } from '../../interfaces/places'

type PlaceAction = 
|{ type: 'setUserLocation', payload: [number, number] }
|{ type: 'setLoadingPlaces'}
|{ type: 'setPlace', payload: Feature[] };


export const placesReducer = (state: PlacesState, action: PlaceAction): PlacesState => {
  switch (action.type) {
  case 'setUserLocation':
    return {
      ...state,
      isLoading: false,
      userLocation: action.payload
    }
  case 'setLoadingPlaces':
    return {
      ...state,
      isLoadingPlaces: true,
      places:[]
    }
  case 'setPlace':
    return {
      ...state,
      isLoadingPlaces: false,
      places: action.payload
    }
  default:
    return state
  }
}
