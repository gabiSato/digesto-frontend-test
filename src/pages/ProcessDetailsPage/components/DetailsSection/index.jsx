import React from "react";
import { formatPrice } from "../../../../tools/formatters";

const DetailsSection = ({ process }) => {
  return (
    <div className="content">
      <p>
        {process?.area} / {process?.instancia}º instância
      </p>
      <p>{process?.classeNatureza}</p>
      <p>Comarca {process?.comarca}</p>
      <p>Data de distribuição {process?.distribuicaoData}</p>
      <p>Valor da causa {formatPrice(process?.valor)}</p>
    </div>
  );
};

export default DetailsSection;
