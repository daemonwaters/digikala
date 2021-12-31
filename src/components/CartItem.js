import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function CartItem({
  img,
  price,
  qnt,
  info,
  index,
  cartItems,
  setCartItems,
  cartItem,
}) {
  const [input, setInput] = useState(1);
  const handleChange = (e) => {
    if (e.target.value <= 1) {
      setInput(1);
      return;
    }
    setInput(e.target.value);
  };
  const handleRemove = () => {
    let filtered = cartItems.filter((el) => el.info !== info);
    setCartItems(filtered);
  };

  useEffect(() => {
    let except = cartItems.filter((item) => item.info !== info);
    setCartItems([
      ...except,
      {
        ...cartItem,
        qnt: input
      },
    ]);
  }, [input]);

  return (
    <div key={index} className="cart-item">
      <span className="cart-item-index">{index + 1}</span>
      <img src={img} alt={`cart-item-pic${index}`} />
      <p>{info}</p>
      <input onChange={handleChange} type="number" step="1" value={qnt} />
      <h3>مبلغ : {price}</h3>
      <FaTrash onClick={handleRemove} />
    </div>
  );
}

export default CartItem;
