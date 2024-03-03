import React from 'react'

const SearchItem = ({newSearchItem,setSearchItem}) => {
  return (
   <form className='formName' onSubmit={(e)=>e.preventDefault()} >
 <input  input='text' placeholder='SearchCompay' required className='textbox' value={newSearchItem} onChange={(e)=>{setSearchItem(e.target.value)}}>
        </input>
   </form>
  )
}

export default SearchItem
