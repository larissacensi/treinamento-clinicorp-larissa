import logo from './logo.svg';
import './App.css';
import crud from './config/crud';

function App() {
  function addRegister() {
    const saveDate = {
      born: 1998,
      last: "Censi",
      first: "Larissa"
    }

    crud.save("user", saveDate).then(
      user => {
        console.log('USER', user);
      }).catch(console.error);
  }

  return (
    <div className="App">
      <button onClick={addRegister}>Criar Registro</button>
    </div>
  );
}

export default App;
