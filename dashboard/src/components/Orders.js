import React,{useState,useEffect} from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {
  const [allorder , setallorder]= useState([]);

useEffect(()=>{
  axios.get("https://zerodha-clone-tfes.onrender.com/allorder").then((res)=>{
    console.log(res.data);
    setallorder(res.data);
  });
},[])

  return (
    <>
   <h3 className="title">Order ({allorder.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>name</th>
            <th>Qty.</th>
            <th>price.</th>
            <th>mode</th>
          </tr>

          {allorder.map((stock,idx)=>{
                      return(
                        <tr key={idx}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}.</td>
                      <td>{stock.qty}.</td>
                      <td>{stock.mode}.</td>
                    </tr>
                      )
                    })}
          
        </table>
      </div>
      </>
  );
};

export default Orders;
