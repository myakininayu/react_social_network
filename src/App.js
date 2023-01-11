import './App.css';

const App = () => {
  return (
    <div className="App">
      <div><Header/></div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
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

export default App;
