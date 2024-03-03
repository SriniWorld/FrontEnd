import React from 'react'
import ItemList from './ItemList'

const Life = ({items,handleCheckbox,handleDeletename}) => {
    
  return (
    <main>
        {(items.length) ? 
       <ItemList items={items} handleCheckbox={handleCheckbox} handleDeletename={handleDeletename} />
      : <p style={{color:"rebeccapurple"}}>Your list is empty</p>
      }
    </main>
  )
}

export default Life
