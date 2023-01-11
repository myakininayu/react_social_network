import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Technologies/>
    </div>
  );
}

const Header = () => {
  return (
    <div className="App">
        <a href='#s'>Home</a>
        <a href='#s'>News Feed</a>
        <a href='#s'>Messages</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

export default App;
