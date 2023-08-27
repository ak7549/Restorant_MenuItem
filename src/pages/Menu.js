import React, { useState } from "react";
// import BlackCoffe from "../assests/backCoffee.jpg";
import "../style/Menu.css";
import MenuApi from "./MenuApi";
import MenuCard from "./MenuCard";

function Menu() {

  const [menuData,setMenuData]=useState(MenuApi)

  // for Breakfast
  const filterItem=(category)=>{

    const updatedList=MenuApi.filter((curElem)=>{
      return curElem.category===category
    })

    setMenuData(updatedList)
    

  }

  return (
    <>
    <div className="menuNavbar shadow-lg p-3 mb-5 bg-body rounded">
     <button className="btn-group" onClick={()=>filterItem("breakfast")}>Breakfast</button>
     <button className="btn-group" onClick={()=>filterItem("Lunch")}>Lunch</button>
     <button className="btn-group" onClick={()=>filterItem("Evening")}>Evening</button>
     <button className="btn-group" onClick={()=>filterItem("Dinner")}>Dinner</button>
     {/* <button className="btn-group" onClick={()=>setMenuData(MenuApi)}>All</button> */}
    </div>
      <MenuCard menuData={menuData}/>
    </>
  );
}

export default Menu;
