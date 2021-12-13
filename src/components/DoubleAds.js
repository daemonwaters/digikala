import React from "react";

function DoubleAds({ ads }) {
  return (
    <div className="double-ads">
      {ads.map((ad, index) => (
        <div key={index + 12} className="ad-sec">
          <img src={ad} alt={`pic-ad-${index}`} />
        </div>
      ))}
    </div>
  );
}

export default DoubleAds;
