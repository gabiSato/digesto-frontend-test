import { useContext, useEffect, useState } from "react";

import { ProcessContext, STATUS } from "../../contexts/ProcessContext";

function useSearch(navigate) {
  const {
    state: { status, statusMessage },
    action: { getProcess },
  } = useContext(ProcessContext);

  const [cnj, setCnj] = useState("");

  const searchProcess = () => getProcess(cnj);

  useEffect(() => {
    if (status === STATUS.SUCCESS) navigate(`/processo/${cnj}`);
  }, [status]);

  return {
    state: {
      cnj,
      isLoading: status === STATUS.LOADING,
      showMessage: status === STATUS.NO_RESULT || status === STATUS.ERROR,
      statusMessage,
    },
    action: {
      setCnj,
      searchProcess,
    },
  };
}

export default useSearch;
