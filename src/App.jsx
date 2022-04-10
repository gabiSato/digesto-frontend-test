import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
