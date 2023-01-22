import { ChangeEvent, useContext, useRef } from 'react'
import { PlaceContext } from '../../context/places/PlacesContext'
import { SearchResults } from '../SearchResults'
import { MapContext } from '../../context/map/MapContext'

export const SearchBar = () => {
  const {isReady} = useContext(MapContext)
  const {searchByQuery} = useContext(PlaceContext)
  const debounceRef = useRef<NodeJS.Timeout>()
  
  const handleQuery = ( event: ChangeEvent<HTMLInputElement>) =>{
    if(debounceRef.current)
      clearTimeout( debounceRef.current)
      
    debounceRef.current = setTimeout(() =>{
      searchByQuery(event.target.value)
    }, 700)
  }


  return (
    <>
      {
        isReady ?
          <div className='search-bar'>
            <input type='text'
              placeholder='Search your place ...'
              onChange={handleQuery}
            />
            <SearchResults />
          </div>
          :''  
      }
    </>
  )
}

