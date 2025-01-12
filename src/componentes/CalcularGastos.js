import React, { useState } from "react";
import axios from "axios";

const CalcularGastos = () => {
    const [fechaInicio, setFechaInicio] = useState(""); // Fecha de inicio
    const [fechaFin, setFechaFin] = useState(""); // Fecha de fin
    const [resultados, setResultados] = useState([]); // Resultados de la tabla
    const [error, setError] = useState(""); // Mensaje de error

    const handleCalcular = async () => {
        if (!fechaInicio || !fechaFin) {
            setError("Por favor, ingresa ambas fechas.");
            return;
        }

        try {
            setError("");
            const response = await axios.get(
                "https://mini-core-backend.onrender.com/core/gastos-por-departamento", // Cambia esta URL si es necesario
                {
                    params: {
                        fechaInicio,
                        fechaFin
                    }
                }
            );

            setResultados(response.data);
        } catch (err) {
            setError("Error al obtener los datos. Por favor, verifica las fechas.");
        }
    };
    
    return (
        <div id="calcular-gastos-container">
            <h2 id="titulo">Calcular Gastos por Departamento</h2>

            {/* Campos para las fechas */}
            <div id="inputs-container">
                <label>
                    Fecha de Inicio:
                    <input
                        type="date"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                    />
                </label>
                <label>
                    Fecha de Fin:
                    <input
                        type="date"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                    />
                </label>
                <button id="boton-calcular" onClick={handleCalcular}>
                    Calcular
                </button>
            </div>

            {/* Mensaje de error */}
            {error && <p id="mensaje-error">{error}</p>}

            {/* Resultados en tabla */}
            {resultados.length > 0 && (
                <table id="tabla-resultados">
                    <thead>
                        <tr>
                            <th>Departamento</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados.map((resultado, index) => (
                            <tr key={index}>
                                <td>{resultado.departamento}</td>
                                <td>{resultado.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Mensaje si no hay datos */}
            {resultados.length === 0 && !error && (
                <p id="mensaje-sin-datos">
                    No hay datos disponibles para el rango de fechas seleccionado.
                </p>
            )}
        </div>
    );
};

export default CalcularGastos;