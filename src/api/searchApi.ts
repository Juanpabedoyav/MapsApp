import axios from 'axios'


export const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params:{
    limit: '5',
    language: 'es',
    access_token : 'pk.eyJ1IjoianVhbnBhYmVkb3lhdiIsImEiOiJjbGM4bXUweDkwZ2k1M3ZwMWVhNjgxajFiIn0.5hZEOnz_IkRGl69SY1xd7Q'
  }

})