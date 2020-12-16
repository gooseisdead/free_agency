import './App.css';
import FreeAgentContainer from './Containers/FreeAgentContainer'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FreeAgentContainer />
      </header>
    </div>
  );
}

export default App;