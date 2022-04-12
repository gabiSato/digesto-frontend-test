import React from "react";
import { useNavigate } from "react-router-dom";

import DigestoLogo from "../../assets/images/digesto-logo.png";

import SearchBar from "./components/SearchBar";
import styles from "./styles.module.css";
import useSearch from "./hook";

const SearchPage = () => {
  let navigate = useNavigate();
  const { state, action } = useSearch(navigate);

  return (
    <div className={styles.container}>
      <img src={DigestoLogo} alt="Digesto" className={styles.logo} />

      <p className={styles.subtitle}>
        Acompanhe todos os seus processos de forma simples, rápida e unificada.{" "}
        <br />
        Basta preencher o campo abaixo com o CNJ do processo.
      </p>

      <SearchBar
        value={state.cnj}
        isLoading={state.isLoading}
        onInputChange={action.setCnj}
        onSubmit={action.searchProcess}
        placeholder="0000000-00.0000.0.00.0000"
      />
    </div>
  );
};

export default SearchPage;
