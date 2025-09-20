import React,{useState,useEffect}from "react";
import axios from "axios";
const Positions = () => {
  const [allposition , setallpositon]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allposition").then((res)=>{
      setallpositon(res.data);
    });
  },[])
  return (
    <>
      <h3 className="title">Positions ({allposition.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allposition.map((stock,idx)=>{
                      const currval = stock.price * stock.qty;
                      const isProfit =currval - stock.avg* stock.qty >=0.0;
                      const profclass = isProfit ? "profit":"loss";
                      // ye stock.is loss na smajh aaya ye kaha se aa gya bs
                      const dayclass = stock.isLoss ? "loss":"profit"; 
          
                      return(
                        <tr key={idx}>
                      <td>{stock.product}</td>
                      <td>{stock.name}.</td>
                      <td>{stock.qty}.</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td className={profclass}>{(currval - stock.avg* stock.qty).toFixed(2)}</td>
                      <td className={profclass}>{stock.net}</td>
                      <td className={dayclass}>{stock.day}</td>
                    </tr>
                      )
                    })}
          
        </table>
      </div>
    </>
  );
};

export default Positions;
