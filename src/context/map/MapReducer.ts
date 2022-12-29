import { Map } from "mapbox-gl";
import { MapState } from "./MapProvider";

type MapAction = { type: 'setMap', payload: Map}

export const MapReducer = (state:MapState, action:MapAction):MapState  =>{

    switch (action.type) {
        case 'setMap':
            return{
                ...state,
                isReady:true,
                map:action.payload
              
                
            }
            
    
        default:
            return state;
    }

}