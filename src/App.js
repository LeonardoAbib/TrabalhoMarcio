import { FiSearch } from "react-icons/fi";
import './styles.css';
import { useState } from "react";
import api from "./services/api";
import RouteApp from "./rounter";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === ''){
      alert('Insira um CEP');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
  }
  catch{
    alert('Error');
    setInput("");
  }
}
  return (
  <div>

    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP"
        value={input} onChange={(evento) => setInput(evento.target.value)} />

        <button className="botao" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>

      </div>
      

      {Object.keys(cep).length > 0 &&(
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}</span>
          <span>{cep.uf}</span>
        </main>
        )}   
    </div>
  </div>
  );
}

export default App;

