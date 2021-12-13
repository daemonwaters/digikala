import React from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { countryStates } from "./CountryStatesData";

function StateModal({ modal, setModal }) {
  if (!modal) return null;
  //to manage rendering of the modal

  const handleCloseModal = (e) => {
    if (e.target.id === "modal") setModal(false);
    //close the modal if the user clicks outside of the modal's content
  };

  return createPortal(
    <div className="state-modal" id="modal" onClick={handleCloseModal}>
      <div className="choose-state">
        <div className="top-sec">
          <h3>انتخاب استان</h3>
          <FaTimes onClick={() => setModal(false)} />
        </div>
        <div className="state-list">
          <div className="auto-location">
            <BiTargetLock />
            <h4>مکان یابی خودکار</h4>
          </div>
          <ul>
            {countryStates.map((item, index) => (
              <li key={index}>
                {item}
                <FaChevronLeft />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default StateModal;
