import React, { useEffect } from "react";
import { getCategory } from "../../services/apiCategory";

const Category = ({ id, name, handleChange }) => {
  return (
    <div className="cat">
      <input
        type="radio"
        name="category_id"
        value={id}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor="art">{name.toUpperCase()}</label>
    </div>
  );
};

export default Category;
