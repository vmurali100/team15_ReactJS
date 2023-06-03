// import React from "react";

// import { CartContextConsumer } from "./Cartcontext";

// const Carttable = () => {
//   return (
//     <div>
//       <CartContextConsumer>
//         {(value) => {
//           console.log(value);
//           return (
//             <div>
//               <table border={1}>
//                 <thead>
//                   <tr>
//                     <td>id</td>
//                     <td>UserId</td>
//                     <td>Date</td>
//                     <td>Products</td>
//                     <td>productId</td>
//                     <td>quantity</td>
//                     <td>Edit</td>
//                     <td>Delete</td>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {value.data.map((usr, i) => (
//                     <tr key={i}>
//                       <td>{usr.id}</td>
//                       <td>{usr.userId}</td>
//                       <td>{usr.date}</td>
//                       <td>{usr.products}</td>
//                       <td>{usr.productId}</td>
//                       <td>{usr.quantity}</td>

//                       <td>
//                         <button
//                           onClick={() => {
//                             value.handleEdit(usr, i);
//                           }}
//                         >
//                           EDIT
//                         </button>
//                       </td>
//                       <td>
//                         <button
//                           onClick={() => {
//                             value.handleDelete(usr, i);
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           );
//         }}
//       </CartContextConsumer>
//     </div>
//   );
// };
// export default Carttable;
