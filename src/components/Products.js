import React from "react";
import {
  FaBaby,
  FaChair,
  FaHeartbeat,
  FaLaptop,
  FaPencilAlt,
  FaShoppingCart,
  FaTshirt,
  FaWrench,
} from "react-icons/fa";
import { GiCampingTent, GiFlowerPot } from "react-icons/gi";
function Products() {
  return (
    <div className="products">
      <p>بیش از ۶،۰۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف</p>
      <div className="products-wrapper">
        <div className="product">
          <FaLaptop />
          <h4>کالای دیجیتال</h4>
          <p>+1109000 کالا</p>
        </div>
        <div className="product">
          <FaWrench />
          <h4>خودرو,ابزار و تجهیزات صنعنی</h4>
          <p>+171000 کالا</p>
        </div>
        <div className="product">
          <FaTshirt />
          <h4>مد و پوشاک</h4>
          <p>+781000 کالا</p>
        </div>
        <div className="product">
          <FaBaby />
          <h4>اسباب بازی,کودک و نوزاد</h4>
          <p>+81000 کالا</p>
        </div>
        <div className="product">
          <FaShoppingCart />
          <h4>کالاهای سوپرمارکتی</h4>
          <p>+69000</p>
        </div>
        <div className="product">
          <FaHeartbeat />
          <h4>زیبایی و سلامت</h4>
          <p>+109000 کالا</p>
        </div>
        <div className="product">
          <FaChair />
          <h4>خانه و اشپزخانه</h4>
          <p>+583000 کالا</p>
        </div>
        <div className="product">
          <FaPencilAlt />
          <h4>کتاب,لوازم تحریر و هنر</h4>
          <p>+299000</p>
        </div>
        <div className="product">
          <GiCampingTent />
          <h4>ورزش و سفر</h4>
          <p>+45000 کالا</p>
        </div>
        <div className="product">
          <GiFlowerPot />
          <h4>محصولات بومی محلی</h4>
          <p>+4000 کالا</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
