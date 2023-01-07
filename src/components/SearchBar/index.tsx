import { ChangeEvent, useContext, useRef } from 'react'
import { PlaceContext } from '../../context/places/PlacesContext'

export const SearchBar = () => {
  
  const {searchByQuery} = useContext(PlaceContext)
  const debounceRef = useRef<NodeJS.Timeout>()
  
  const handleQuery = ( event: ChangeEvent<HTMLInputElement>) =>{
    if(debounceRef.current)
      clearTimeout( debounceRef.current)
      
    debounceRef.current = setTimeout(() =>{
      searchByQuery(event.target.value)
    }, 1000)
  }


  return (
    <>
      <div style={{
        position: 'fixed',
        top: '50px',
        zIndex: 999,
        background: '#FFF'
      }}>
        <input type='text'
          placeholder='Search your place ...'
          onChange={handleQuery}
        />
      </div>
    </>
  )
}

