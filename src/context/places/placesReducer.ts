import { PlacesState } from "./PlacesProvider";

type PlaceAction = { type: 'setUserLocation', payload:[number, number] }

export const placesReducer = ( state:PlacesState, action:PlaceAction ):PlacesState =>{
    switch (action.type) {
        case 'setUserLocation':
            return{
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
    
        default:
            return{
                ...state,
            }
    }

    
}