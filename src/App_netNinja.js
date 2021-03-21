import Navbar from './Navbar';
import './App.css';


function App() {
  const nomes = [
    {
      nome: 'Gabriel',
      idade: 30
    },
    {
      nome: 'Mariana',
      idade: 31
    }
  ]
  return (
    <div className="App">
      <div className="content">
        <h1>App component</h1>
        <p>{nomes[0].nome}</p>
        <p>Map:</p>
        {nomes.map(pessoa => {
          return (<p>Nome: {pessoa.nome}, idade: {pessoa.idade}</p>)
        })}
      </div>

    </div>
  );
}

export default App;
