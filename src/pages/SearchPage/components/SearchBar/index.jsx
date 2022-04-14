import React from "react";

import { MdSearch } from "react-icons/md";

import styles from "./styles.module.scss";

const SearchBar = ({
  value,
  placeholder,
  onInputChange,
  onSubmit,
  isLoading = false,
}) => {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-medium is-expanded">
          <input
            className="input is-primary is-medium placeholder-mixin"
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className={`button is-medium is-rounded is-inverted ${
            isLoading ? "is-loading" : "is-primary"
          }`}
        >
          <span className={`icon ${isLoading ? "is-hidden" : ""}`}>
            <MdSearch className={styles.icon} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
