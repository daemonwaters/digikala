import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { dataCategories } from "./DataCategories";

function Categories({ hover7 }) {
  const [row, setRow] = useState(0);

  const { content, title } = dataCategories[row];

  if (!hover7) return null;
  return (
    <div className="categories">
      <div className="options">
        {dataCategories.map((option, index) => {
          return (
            <span
              key={index}
              className={index === row ? "category active" : "category"}
              onMouseEnter={() => setRow(index)}
            >
              {option.icon}
              {option.category}
            </span>
          );
        })}
      </div>
      <div className="category-content">
        <h3>
          {title}
          <FaChevronLeft />
        </h3>
        {content.map((col, index) => (
          <div key={index} className="category-content-col">
            {col.map((item, index) => {
              return (
                <span key={index} className="col-item">
                  {item}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
