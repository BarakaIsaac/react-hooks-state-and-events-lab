import React, {useState} from "react";

function Item({ name, category }) {
  
  
  const [addCart, setAddCart] = useState(false)


  function handleCartChange() {
    setAddCart(addCart => !addCart)
  }
  
  const listItemClass = addCart ? "in-cart" : ""

  return (
    <li className={listItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartChange}>{addCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
