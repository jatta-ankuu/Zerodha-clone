import React, {useState} from "react";
import {Link} from "react-router-dom"


const Menu = () => {
  const [ selectMenu , setselectMenu]= useState(0);

  const handleclick =(idx)=>{
    setselectMenu(idx);
  }
 
  // ✅ Logout function
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3002/logout", {
        method: "POST",
      });
      if (res.ok) {
        window.location.href = "http://localhost:3001"; // frontend login/home page
      } else {
        const data = await res.json();
        alert(data.message || "Logout failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }

  const notselect ="menu";
  const yesselect ="menu selected"

  return (
    <div className="menu-container">
      <img src="\logo.png" alt="Img not load" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>{handleclick(0)}}>
            <p className={selectMenu===0 ? yesselect:notselect }>Dashboard</p>
            </Link>
            
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/order" onClick={()=>{handleclick(1)}}>
            <p className={selectMenu===1 ? yesselect:notselect }>Order</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>{handleclick(2)}}>
            <p className={selectMenu===2 ? yesselect:notselect }>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>{handleclick(3)}}>
            <p className={selectMenu===3 ? yesselect:notselect }>Position</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>{handleclick(4)}}>
            <p className={selectMenu===4 ? yesselect:notselect }>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>{handleclick(5)}}>
            <p className={selectMenu===5 ? yesselect:notselect }>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleLogout}>
          <div className="avatar">AM</div>
          <p className="username">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
