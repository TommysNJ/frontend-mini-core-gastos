import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalcularGastos from "./componentes/CalcularGastos";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta principal que carga la vista de CalcularGastos */}
                <Route path="/" element={<CalcularGastos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;