import React from "react";

import DigestoLogo from "../../assets/images/digesto-logo.png";

import SearchBar from "./components/SearchBar";

import styles from "./styles.module.css";

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <img src={DigestoLogo} alt="Digesto" className={styles.logo} />

      <p className={styles.subtitle}>
        Acompanhe todos os seus processos de forma simples, rápida e unificada.{" "}
        <br />
        Basta preencher o campo abaixo com o CNJ do processo.
      </p>

      <SearchBar />
    </div>
  );
};

export default SearchPage;
