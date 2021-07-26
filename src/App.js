import logo from './logo.svg';
import './App.css';
import GameOfLife from './GameOfLife';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        3YmRqiRp
        EIAB2UZQ6PNYWUPVEM4WU6S
          My projects notes:
          1 consume API - spotify tiny spotlight
          pure front-end - roberta's site
          blog - to be started
          some fullstack project - maybe hotel idea from reddit post?
          link to post: https://www.reddit.com/r/WebdevTutorials/comments/ok8p9g/4_javascript_projects_to_build_fast_and_get_hired/
          palette https://coolors.co/17bf1b-243010-404e7c-96897b-dae2df
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
      <GameOfLife/>
    </div>
  );
}

export default App;
