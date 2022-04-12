import React, { useContext, useEffect } from "react";

import { ProcessContext } from "../../contexts/ProcessContext";

const ProcessDetailsPage = () => {
  const { state } = useContext(ProcessContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <h1>Process Details Page</h1>
    </div>
  );
};

export default ProcessDetailsPage;
