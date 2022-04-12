import { useContext, useState } from "react";

import { ProcessContext } from "../../contexts/ProcessContext";

function useSearch() {

  const { state, action: { getProcess } } = useContext(ProcessContext);

  const [cnj, setCnj] = useState("");

  const searchProcess = () => {
    getProcess(cnj);
  };

  return {
    state: { cnj },
    action: {
      setCnj,
      searchProcess,
    },
  };
}

export default useSearch;
