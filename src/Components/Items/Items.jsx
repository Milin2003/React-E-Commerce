import React from 'react'

const Items = (props) => {
  return (
    <div>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div>
            <p>{props.new_price}</p>
            <p>{props.old_price}</p>
        </div>
      
    </div>
  )
}

export default Items
