import logo from './logo.svg';
import './App.css';
import Item from './CustomComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item text="👌 React Custom Component" />
        <img src={logo} className="App-logo" alt="logo" />
        <Item text="⬆️ React's Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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


/* 

<Header>
  <Logo icon="🫎"/>
  <Title text="React in 100 Seconds"/>
  <Action onClick={() => likeAndSubscribe()}/>
</Header>


*/