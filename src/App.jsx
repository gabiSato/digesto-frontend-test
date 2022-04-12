import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProcessProvider } from "./contexts/ProcessContext";

import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <ProcessProvider>
        <Routes>
            <Route path="/" element={<SearchPage />} />
        </Routes>
      </ProcessProvider>
    </BrowserRouter>
  );
};

export default App;
