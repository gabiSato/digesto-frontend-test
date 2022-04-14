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
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container is-max-widescreen has-text-centered">
          <img src={DigestoLogo} alt="Digesto" className={styles.logo} />

          <p className="subtitle mb-5 is-size-5-mobile">
            Acompanhe todos os seus processos de forma simples, rápida e
            unificada. <br className="is-hidden-mobile" />
            Basta preencher o campo abaixo com o CNJ do processo.
          </p>

          <div className="columns is-mobile is-centered">
            <div className="column is-12-mobile is-8-tablet is-5-desktop is-centered">
              <div className="column notification mb-4">
                <button className="delete"></button>
                Produto não encontrado
              </div>

              <SearchBar
                value={state.cnj}
                isLoading={state.isLoading}
                onInputChange={action.setCnj}
                onSubmit={action.searchProcess}
                placeholder="0000000-00.0000.0.00.0000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
