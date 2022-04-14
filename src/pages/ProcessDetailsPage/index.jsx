import React, { useContext, useEffect, useState } from "react";

import { ProcessContext } from "../../contexts/ProcessContext";
import DetailsSection from "./components/DetailsSection";
import MovementsSection from "./components/MovementsSection";

import PartsSection from "./components/PartsSection";

const ProcessDetailsPage = () => {
  const {
    state: { process },
    action: { getProcess },
  } = useContext(ProcessContext);

  useEffect(() => {
    getProcess("0019600-40.2007.5.15.0124");
  }, []);

  return (
    <div className="container is-max-widescreen">
      <h1 className="title is-4">
        {process?.tribunal} - Nº {process?.numero}
      </h1>

      <DetailsSection process={process} />

      <h3 className="title is-5">Partes</h3>
      <PartsSection parts={process?.partes} />

      <h3 className="title is-5">Movimentações</h3>
      <MovementsSection movements={process?.movs} />
    </div>
  );
};

export default ProcessDetailsPage;
