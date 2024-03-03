import React from 'react'
import Listitem from './Listitem'

const ItemList = ({items,handleCheckbox,handleDeletename}) => {
  return (
    <div>
       <ul>
     { items.map((item) =>
       <Listitem 
       item={item} handleCheckbox={handleCheckbox} handleDeletename={handleDeletename}
       key={item.id}
       />
       )}
      </ul>
    </div>
  )
}

export default ItemList
