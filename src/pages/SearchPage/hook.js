import { useContext, useState } from "react";

import { ProcessContext } from "../../contexts/ProcessContext";

function useSearch(navigate) {
  const {
    state,
    action: { getProcess },
  } = useContext(ProcessContext);

  const [cnj, setCnj] = useState("");

  const searchProcess = () => {
    getProcess(cnj)
      .then(() => {
        navigate(`/processo/${cnj}`);
      })
      .catch(() => {});
  };

  return {
    state: { cnj, isLoading: state.isLoading },
    action: {
      setCnj,
      searchProcess,
    },
  };
}

export default useSearch;
