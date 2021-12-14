import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavBar from "../NavBar";
import emptyCardPic from "../../media/empty-card.png";
import { CgEnter } from "react-icons/cg";
import { Context } from "../../App";
import StateModal from "../StateModal";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

function Cart({ auth, cartItems, setCartItems }) {
  const [modal, setModal, handleModal] = useContext(Context);
  //had some problems with useContext so i had to use props as well
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce((sum, item) => {
      sum = sum + item.price * item.qnt;
      return sum;
    }, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <div className="cart-page">
      <Header auth={auth} />
      <NavBar handleModal={handleModal} />
      <StateModal setModal={setModal} modal={modal} />
      <div className="cart">
        <h3>سبد خرید</h3>
        {auth ? <h3 className="total">جمع کل خرید:{total}</h3> : null}
        <div>
          <div className="orders">
            {cartItems.length === 0 || !auth ? (
              <div className="empty-cart">
                <img src={emptyCardPic} alt="empty-card" />
                <h3>سبد خرید شما خالی است!</h3>
                <p>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید</p>
                <div className="cart-btns">
                  <span>تخفیف‌ها و پیشنهادها </span>
                  <span>محصولات پرفروش روز</span>
                </div>
              </div>
            ) : (
              cartItems.map((item, index) => {
                return (
                  <CartItem
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    cartItem={item}
                    index={index}
                    img={item.img}
                    info={item.info}
                    price={item.price}
                    qnt={item.qnt}
                  />
                );
              })
            )}
          </div>
          {!auth ? (
            <div className="log-in-cart">
              <Link to="/login">
                <span>
                  <CgEnter />
                  ورود به حساب کاربری
                </span>
                <p>
                  برای مشاهده محصولاتی که پیش تر به سبد خود اضافه کردید لطفا
                  وارد شوید
                </p>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
