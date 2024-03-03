import React, { useRef } from 'react'
const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef =  useRef()
  return (
    <form className='addform' onSubmit={handleSubmit}>
        <input ref={inputRef} input='text' placeholder='Add Company' required className='textbox' value={newItem} onChange={(e)=>{setNewItem(e.target.value)}}>
        </input>
        <button input='submit' aria-label='Add Item' className='button' onClick={()=>inputRef.current.focus()} >
    Add+
        </button>
      
    </form>
  )
}

export default Additem
