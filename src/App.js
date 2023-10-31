import './App.css';
import GameOfLife from './GameOfLife';
import image from './Images/MessagesScreenLine.png'

function App() {

  return (

      <div className = "main">
        <GameOfLife/>
        <div className='statement'>
          <h3>Hi there! I'm <b>Emanuele</b>, a web developer, I specialize in React and .Net but I am always open to learn new technology at any moment, 
          </h3>
        </div>
        <h2>About me</h2>
        <p></p>
        <div className='projects-cont'>
          <h2 className='projects-title'>Projects</h2>
          <div className='project-cont'>
            <img className='project-picture' src = {image} alt= 'website screen'/>
            <h4>Tiny Spotlight</h4>
            <p>A tool designed to shine a spotlight on the less popular artists, 
              a seed based on a song title, artist name, or genre of music is used to generate a playlist.</p>


            <div className='footer-tech'></div>
          </div>
        </div>
      </div>
    
  );
}

export default App;



