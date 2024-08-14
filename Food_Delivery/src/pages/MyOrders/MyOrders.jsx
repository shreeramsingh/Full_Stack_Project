// //import React from 'react'
// import { useContext, useEffect, useState,useCallback } from "react";
// import "./MyOrders.css"
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { assets } from "../../assets/assets";
// const MyOrders = () => {
//   const { url, token } = useContext(StoreContext);
//   const [data, setData] = useState([]);

//   const fetchOrders = useCallback(async () => {
//     try {
//       const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
//       setData(response.data.data);
//       console.log(response.data.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   }, [url, token]);
//   useEffect(()=>{
//     if(token){
//       fetchOrders();
//     }
//   },[token,fetchOrders])
//   return (
//     <div className="my-orders">
//       <h2>My Orders</h2>
//       <div className="container">
//       {data.map((order,index)=>{
//         return(
//           <div key={index} className="my-orders-order">
//             <img src={assets.parcel_icon} alt=""/>
//             <p>{order.items.map((item,index)=>{
//               if(index===order.items.length-1){
//                 return item.name+" x "+item.quantity;
//               }
//             })}</p>
//           </div>
//         )
//       })}

//       </div>
//     </div>
//   );
// };

// export default MyOrders;