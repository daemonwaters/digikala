import React from "react";

function Fourcards({ cards }) {
  return (
    <div className="four-cards">
      {cards.map((card, index) => (
        <div key={index + 5} className="card">
          <img src={card} alt={`cardpic${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Fourcards;
