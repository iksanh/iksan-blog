import React, { useEffect, useRef, useState } from "react";
import { getCategory } from "../../services/apiCategory";

const Category = ({ handleChange, categoryId }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory().then((category) => setCategories(category));
  }, []);
  return (
    <>
      {categories.map(({ id, name }) => (
        <div className="cat" key={id}>
          <input
            checked={id === categoryId}
            type="radio"
            name="category_id"
            value={id}
            id={id}
            onChange={() => handleChange(id)}
          />
          <label htmlFor="art">{name.toUpperCase()}</label>
        </div>
      ))}
    </>
  );
};

export default Category;
