import React, { useContext } from "react";
import { Navigate } from "react-router";
import { Context } from "../../App";
import Header from "../Header";
import NavBar from "../NavBar";
import StateModal from "../StateModal";
import { FaCreditCard, FaUserCircle } from "react-icons/fa";
import { BsHeart, BsEnvelope } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import Footer from "../Footer";

function Profile({ auth, currentUser }) {
  const [modal, setModal, handleModal] = useContext(Context);
  const [{ username, password, name, mail, number }] = currentUser;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="profile">
      <Header auth={auth} />
      <NavBar handleModal={handleModal} />
      <StateModal setModal={setModal} modal={modal} />
      <div className="profile-wrapper">
        <div className="sidebar">
          <div className="sidebar-top">
            <FaUserCircle />
            <span className="current-user-name">{name}</span>
          </div>
          <ul>
            <li>
              <AiOutlineUnorderedList />
              سفارش های من
            </li>
            <li>
              <BsHeart />
              لیست ها
            </li>
            <li>
              <GoComment />
              نظرات
            </li>
            <li>
              <FaCreditCard />
              کارت های هدیه
            </li>
            <li>
              <BsEnvelope />
              پیغام ها
            </li>
          </ul>
        </div>
        <div className="current-user-info">
          <div>
            <h4>نام و نام خانوادگی</h4>
            <p>{name}</p>
          </div>
          <div>
            <h4>پست الکترونیک</h4>
            <p>{mail}</p>
          </div>
          <div>
            <h4>شماره تلفن همراه</h4>
            <p>{number}</p>
          </div>
          <div>
            <h4>نام کاربری</h4>
            <p>{username}</p>
          </div>
          <div>
            <h4>رمز عبور</h4>
            <p>{password}</p>
          </div>
          <div>
            <h4>دریافت خبر نامه</h4>
            <p>خیر</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
