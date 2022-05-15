import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

(function () {}) ()

const $ = (query: string): HTMLInputElement | null => document.querySelector(query)

      $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa) {
          alert("Os campos nome e placa são obrigatórios!");
          return
        }
      })

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <input
        type="text"
        id="nome"
        placeholder="Digite o nome do veículo"
        autoComplete="off"
      />
      <input
        type="text"
        id="placa"
        placeholder="Digite a placa do veículo"
        autoComplete="off"
      />

      <button id="cadastrar">Cadastrar</button>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Placa</th>
            <th>Entrada</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="patio"></tbody>
      </table>
    </div>
  );
}

export default App;
