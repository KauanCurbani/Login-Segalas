import { useNavigate, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login";
import Home from "./pages/homepage";
import { useState } from "react";
import StoreProvider from './utils/store'

function App() {
  console.log(StoreProvider.store)
  return (
    <div className="App">
      <StoreProvider>
        <Routes>
          {/* o Router guarda as Rotas definidas */}
          <Route exact path="/" element={<LoginPage />} />{" "}
          {/* Rota, path= "link", element= "a pagina a ser carregada" */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
