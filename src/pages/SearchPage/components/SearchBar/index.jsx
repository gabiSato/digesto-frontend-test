import React from "react";

import { MdSearch } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import styles from "./styles.module.css";

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
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />

      {isLoading ? (
        <AiOutlineLoading3Quarters className={styles.loader} />
      ) : (
        <button type="submit" className={styles.button}>
          <MdSearch className={styles.icon} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
