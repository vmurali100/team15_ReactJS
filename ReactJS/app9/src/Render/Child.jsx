import React from 'react'

export const Child = ({handlesaybye,displaypuli}) => {
   
  return (
    <div>
        {/* <h1 onClick={handlesaybye}>hi iam chaid component</h1> */}
        {handlesaybye()}
        {displaypuli()}
    </div>
  )
}
