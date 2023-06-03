import React from 'react'
import { YogaContextConsumer } from './YogaContext'

export const YogaTable = () => {
  return (
    <div>
        <YogaContextConsumer>
            {(value)=>{
        //    console.log(value)
           return (
             <div>
               <table border={1}>
                 <thead>
                   <tr>
                     <th>userid</th>
                     <th>Id</th>
                     <th>Title</th>
                   </tr>
                 </thead>
                 <tbody>
                   {value.map((usr) => (
                     <tr>
                       <th>{usr.userId}</th>
                       <th>{usr.Id}</th>
                       <th>{usr.title}</th>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           );
         
            }}
        </YogaContextConsumer>
    </div>
  )
}
