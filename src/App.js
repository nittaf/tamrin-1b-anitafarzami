import logo from './logo.svg';
import './App.css';
import girl from './girl.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='girl' src={girl} width="300 px" height="400 px"></img> <br/>
        <h1 className="name" >Anita Farzami</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

      </header>
    </div>
  );
}

export default App;
