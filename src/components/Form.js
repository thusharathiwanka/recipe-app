import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Form = ({ search, handleQueryChange, handleQuery }) => {
  return (
    <div className="form-container">
      <form>
        <div className="form-content">
          <input
            type="text"
            name="search-query"
            id="search-query"
            value={search}
            onChange={(e) => handleQueryChange(e)}
            placeholder="Chicken"
          />
          <button
            type="submit"
            onClick={(e) => handleQuery(e)}
            className="search-btn"
          >
            <RiSearchLine />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
