import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Service 1‘s API Endpoint: <a className="App-link" href="%%SERVICE_1_ENDPOINT%%" target="_blank">%%SERVICE_1_ENDPOINT%%</a></p>
        <p>Service 2‘s API Endpoint: <a className="App-link" href="%%SERVICE_2_ENDPOINT%%" target="_blank">%%SERVICE_2_ENDPOINT%%</a></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
