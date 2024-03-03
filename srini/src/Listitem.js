import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
const Listitem = ({item,handleCheckbox,handleDeletename}) => {
  return (
    <div>
      <li key={item.id} >
        <label hidden='true'>{item.id}</label>
        <input type='checkbox' checked={item.checked} onChange={()=> handleCheckbox(item.id)}></input>
        <label style={(item.checked) ? {textDecoration:"line-through"}:null} onDoubleClick={()=>handleCheckbox(item.id)}>{item.name}</label>
        <RiDeleteBin6Fill onClick={()=>handleDeletename(item.id)} aria-label="hello" />
       </li>
    </div>
  )
}

export default Listitem
