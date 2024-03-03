import React from 'react'

const Serupu = ( {length}) => {
 
  return (
    <div>
      <p> List of  {length} {length === 1 ? "company" : "companies"}  </p>
    </div>
  )
}

export default Serupu
