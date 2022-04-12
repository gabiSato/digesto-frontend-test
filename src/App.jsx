import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import { ProcessProvider } from "./contexts/ProcessContext";
import ProcessDetailsPage from "./pages/ProcessDetailsPage";

import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <ProcessProvider>
        <Routes>
          <Route index path="/" element={<SearchPage />} />
          <Route
            exact
            path="/processo/:processId"
            element={<ProcessDetailsPage />}
          />
        </Routes>
      </ProcessProvider>
    </BrowserRouter>
  );
};

export default App;
