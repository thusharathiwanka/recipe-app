import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Form = ({ search, handleQueryChange, handleQuery }) => {
  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          name="search-query"
          id="search-query"
          value={search}
          onChange={(e) => handleQueryChange(e)}
        />
        <button type="submit" onClick={(e) => handleQuery(e)}>
          <RiSearchLine />
        </button>
      </form>
    </div>
  );
};

export default Form;
