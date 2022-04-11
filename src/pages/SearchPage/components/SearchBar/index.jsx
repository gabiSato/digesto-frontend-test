import React from "react";

import { MdSearch } from "react-icons/md";

import styles from "./styles.module.css";

const SearchBar = ({ value, placeholder, onInputChange, onSubmit }) => {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />

      <button className={styles.button} onClick={onSubmit}>
        <MdSearch className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchBar;
