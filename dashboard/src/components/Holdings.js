import React,{useState,useEffect} from "react";

import axios from 'axios'

const Holdings = () => {
  const [allholding, setallholding]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allholding").then((res)=>{
      setallholding(res.data);
    });
  },[])


  return (
    <>
      <h3 className="title">Holdings ({allholding.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allholding.map((stock,idx)=>{
            
            const currval = stock.price * stock.qyt;
            const isProfit =currval - stock.avg* stock.qyt >=0.0;
            const profclass = isProfit ? "profit":"loss";
            // ye stock.is loss na smajh aaya ye kaha se aa gya bs
            const dayclass = stock.isLoss ? "loss":"profit"; 

            return(
              <tr key={idx}>
            <td>{stock.name}</td>
            <td>{stock.qyt}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currval}</td>
            <td className={profclass}>{(currval - stock.avg* stock.qyt).toFixed(2)}</td>
            <td className={profclass}>{stock.net}</td>
            <td className={dayclass}>{stock.day}</td>
          </tr>
            )
          })}


        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
