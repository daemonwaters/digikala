import { createContext, useEffect, useState } from "react";
import Fourcards from "./components/Fourcards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import OfferSection from "./components/OfferSection";
import StateModal from "./components/StateModal";
import TopHeader from "./components/TopHeader";
import "./styles/App.css";
import { cardsData } from "./components/FourCardsData";
import { offerSecData, offerSecData2 } from "./components/OfferSecData";
import DoubleAds from "./components/DoubleAds";
import { doubleAdsData, doubleAds2Data } from "./components/DoubleAdsData";
import RandomCategory from "./components/RandomCategory";
import Products from "./components/Products";
import RandomCategory2 from "./components/RandomCategory2";
import { cardsData2 } from "./components/FourCards2Data";
import Footer from "./components/Footer";
import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./components/Routes/Login";
import Cart from "./components/Routes/Cart";
import Profile from "./components/Routes/Profile";
export const Context = createContext();
function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };
  const [auth, setAuth] = useState(false);
  const [cartItems,setCartItems] = useState([])
  const [currentUser,setCurrentUser] = useState();
  useEffect(()=>{
    let data = localStorage.getItem("orders")
    if(data){
      setCartItems(JSON.parse(data))
    }
  },[])


  useEffect(()=>{
    localStorage.setItem("orders",JSON.stringify(cartItems))
  },[cartItems])

  return (
    <Context.Provider value={[modal, setModal, handleModal, auth, setAuth,cartItems,setCartItems]}>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopHeader />
                <Header length={cartItems.length} auth={auth} />
                <NavBar handleModal={handleModal} />
                <StateModal setModal={setModal} modal={modal} />
                <Hero />
                <OfferSection
                  date="dec 15,2021 23:59:59"
                  offers={offerSecData}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  auth={auth}
                />
                <Fourcards cards={cardsData} />
                <OfferSection
                  date="dec 27,2021 14:39:00"
                  bg="#6BB928"
                  offers={offerSecData2}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  auth={auth}
                />
                <DoubleAds ads={doubleAdsData} />
                <RandomCategory cartItems={cartItems} setCartItems={setCartItems} auth={auth} />
                <Products />
                <RandomCategory2 cartItems={cartItems} setCartItems={setCartItems} auth={auth} />
                <Fourcards cards={cardsData2} />
                <DoubleAds ads={doubleAds2Data} />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} setAuth={setAuth} auth={auth} />}
          />
          <Route path="/cart" element={<Cart setCartItems={setCartItems} cartItems={cartItems} auth={auth} />} />
          <Route path="/profile" element={<Profile currentUser={currentUser} auth={auth} />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
