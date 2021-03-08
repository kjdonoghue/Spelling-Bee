import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters';
import Word from './components/Word';
import ApprovedWords from './components/ApprovedWords';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      <Score />
      <Letters/>
      <Word />
      <ApprovedWords />
      
    </div>
  );
}

export default App;
