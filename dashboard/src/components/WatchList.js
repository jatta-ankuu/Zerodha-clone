import React, {useState, useContext} from "react";
import {Tooltip,Grow} from '@mui/material'
import {watchlist} from "../data";
import {KeyboardArrowUp , KeyboardArrowDown, BarChartOutlined, MoreHoriz} from '@mui/icons-material';
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,idx)=>{
          return(
          <WatchlistIteam  stock={stock} key={idx}/>
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchlistIteam=({stock})=>{
  const [ watchItem , setwatchItem ]= useState(false);

  const handlemouseon =(e)=>{
    setwatchItem(true);
  }
   const handlemouseleave =(e)=>{
    setwatchItem(false);
  }

  return (
    <li onMouseEnter={handlemouseon} onMouseLeave={handlemouseleave}>
      <div className="item">
        <p className={stock.isDown ? "down" :"up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down"/>
          ): (<KeyboardArrowUp className="up"/>)
          }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {watchItem && <Watchaction uid={stock.name}/>}
    </li>
  );
}

const Watchaction = ({uid})=>{
  const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return(
  <span className="actions">
    <span>
      <Tooltip
      title="Buy (B)"
      placement="top"
      arrow
      TransitionComponent={Grow}
      onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
      title="Sell (S)"
      placement="top"
      arrow
      TransitionComponent={Grow}
        
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
      title="Analytics (A)"
      placement="top"
      arrow
      TransitionComponent={Grow}
      >
        <button className="action"><BarChartOutlined className="icon"/></button>
      </Tooltip>
      <Tooltip
      title="More"
      placement="top"
      arrow
      TransitionComponent={Grow}
      >
        <button className="action"><MoreHoriz className="icon"/></button>
      </Tooltip>
    </span>
  </span>
  );
}