import React from "react";

import { MdSearch } from "react-icons/md";

import styles from "./styles.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="0019600-40.2007.5.15.0124"
      />

      <button className={styles.button}>
        <MdSearch className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchBar;
