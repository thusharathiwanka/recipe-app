import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" name="search-query" id="search-query" />
        <button type="submit">
          <RiSearchLine />
        </button>
      </form>
    </div>
  );
};

export default Form;
