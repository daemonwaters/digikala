import { useState } from "react";
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
function App() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  return (
    <div className="wrapper">
      <TopHeader />
      <Header />
      <NavBar handleModal={handleModal} />
      <StateModal setModal={setModal} modal={modal} />
      <Hero />
      <OfferSection date="dec 15,2021 23:59:59" offers={offerSecData} />
      <Fourcards cards={cardsData} />
      <OfferSection
        date="dec 27,2021 14:39:00"
        bg="#6BB928"
        offers={offerSecData2}
      />
      <DoubleAds ads={doubleAdsData} />
      <RandomCategory />
      <Products />
      <RandomCategory2 />
      <Fourcards cards={cardsData2} />
      <DoubleAds ads={doubleAds2Data} />
    </div>
  );
}

export default App;
