import axios from 'axios'


export const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params:{
    alternatives: false,
    continue_straight: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token : 'pk.eyJ1IjoianVhbnBhYmVkb3lhdiIsImEiOiJjbGM4bXUweDkwZ2k1M3ZwMWVhNjgxajFiIn0.5hZEOnz_IkRGl69SY1xd7Q'
  }

})