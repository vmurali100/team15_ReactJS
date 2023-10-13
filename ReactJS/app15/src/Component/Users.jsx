export const Users=()=>{
   return <div>
   
      <table border={5}>
        <thead>
          <tr>
            <th>Build Name</th>
            <th>Table Name</th>
            <th>Queries</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={4}>Bulid Name1</td>
            <td rowSpan={2}>Table Name1</td>
            <td>Query1</td>
          </tr>
          <td>Query2</td>

          
          <tr>
          <td rowSpan={2}>Table Name2</td>
            <td>Query1</td>
          
          </tr>
          <tr>
           <td>Query4</td>
          </tr>
        </tbody>
      </table>
  
   </div> 
}