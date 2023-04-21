import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { PATH } from "./consts";

import { SwapPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.SWAP} element={<SwapPage />}></Route>
        <Route path="*" element={<Navigate to={PATH.SWAP} />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
