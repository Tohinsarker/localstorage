import React from "react";
import './Botle.css';

const Botle = ({ data,handleAddToCard }) => {
  const { category, name, seller, price, img, id } = data;
  return (
    <div >
      <div className="img"><img src={img} alt="" /></div>
      <div className="flex">
        <div>
          <h2>Name: {name}</h2>
          <h3>Price: {price}$</h3>
        </div>
        <div>
            <button onClick={() =>handleAddToCard(data)}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Botle;
