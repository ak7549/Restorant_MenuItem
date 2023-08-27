import React from "react";
import "../style/MenuCard.css"

function MenuCard({ menuData }) {
  console.log(menuData);

  
    
   

  
  return (
    <>
    <div className="section ">
      {menuData.map((curElem) => {
        return (
            <>
          <div className="card-container col" key={curElem.id}>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <span className="card-number card-circle subtle">{curElem.id}</span>
                <span className="card-author subtle">{curElem.category}</span>
                <h2 className="card-title">{curElem.name}</h2>
                <span className="card-description subtle">
                  {curElem.description}
                </span>
                <div className="card-read">Read</div>
                <div className="rupees">{curElem.price}</div>
              </div>
              <img src={curElem.Image} alt="" className="imgSection" />
              <div className="card-tag subtle">
                <button type="submit"  id="btn">Order Now</button> 
                </div>
            </div>
          </div>
          </>
        );
      })}
      </div>
    </>
  );
}

export default MenuCard;
