import React from 'react'

 const Viharika = ({handlesayhello,displaymouni}) => {
  return (
    <div>
         <div>
        {/* <h2 onClick={handlesayhello}>We have couple to each other</h2> */}
        {handlesayhello()}
        {displaymouni()}
      </div>
    </div>
  )
}
export default Viharika
