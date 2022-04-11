import { useState } from "react";

function useSearch() {
  const [cnj, setCnj] = useState("");

  const searchProcess = () => {};

  return {
    state: { cnj },
    action: {
      setCnj,
      searchProcess,
    },
  };
}

export default useSearch;
