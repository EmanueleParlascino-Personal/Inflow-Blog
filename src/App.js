import './App.css';
import GameOfLife from './GameOfLife';
import spot from './Images/Tiny spot.JPG'
import herta from './Images/herta.JPG'
import pow from './Images/piece of work.JPG'
import unbiased from './Images/unbiased.JPG'
import recipeScreen from './Images/Recipe app.JPG'
import arya1 from './Images/arya.JPG'
import arya2 from './Images/arya 2.JPG'

function App() {

  return (

      <div className = "main">
        <GameOfLife/>
        <div className='statement'>
          <h3>Hi there! I'm <b>Emanuele</b>, a Fullstack developer. Let's make some stuff!
          </h3>
        </div>
        <h1>About me</h1>
        <p className='about-p'>lorem ipsumaksndfaffffffasf nikasnfiasnf oiasjfknasfn aksnflkanf asnfikasnf askf asnfkasnflkan  
        </p>
        <h1 className='projects-title'>Projects</h1>
        <div className='projects-cont'>
          <div className='project-cont'>
            <img className='project-picture' src = {spot} alt= 'Tiny spotlight screen'/>
            <h4>Tiny Spotlight</h4>
            <p>A tool designed to shine a spotlight on the less popular artists, 
              a seed based on a song title, artist name, or genre of music is used to generate a playlist.</p>
            <div className='footer-tech'></div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {pow} alt= 'pow website screen'/>
            <h4>Piece of Work</h4>
            <p>Used by the member of Salt's PGP(postgraduate program) to manage assignment and submissions and compare results. I was the lead of the Backend team on this project</p>
            <div className='footer-tech'></div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {herta} alt= 'herta website screen'/>
            <h4>Herta's Website</h4>
            <p>A webshop made for Greek metal band Herta, created and designed by me, includes a backend to updated show dates, shop items etc..</p>
            <div className='footer-tech'></div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {unbiased} alt= 'unbiased website screen'/>
            <h4>Unbiased</h4>
            <p>A 3 days project made during a Hackaton, the objective is to anonimize CVs and resume to avoid subconscious Bias by hiring staff. I lead the frontend team.</p>
            <div className='footer-tech'></div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {recipeScreen} alt= 'unbiased website screen'/>
            <h4>Recipe App</h4>
            <p>Final project for the .Net Fullstack Bootcamp, uses external apis to search recipe based on a search term, you can save the recipes on the platform and add notes of your own</p>
            <div className='footer-tech'></div>
          </div>
          <div className='project-cont'>
            <div className='phonesCont'>
              <img className='phoneScreen' src = {arya1} alt= 'arya screen'/>
              <img className='phoneScreen' src = {arya2} alt= 'arya screen2'/>
            </div>
            <h4>Arya</h4>
            <p>Fashion orient social media app developed in React Native, you can couple exclusive clothing items with rfid tags and show it off to your friends, see what celebrities are wearing right now and other exciting features. Developments has been halted since 2020 because of the pandemic.</p>
            <div className='footer-tech'></div>
          </div>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/P-d4DfYhSYg?si=p4j_ZIPWVsBzFPhH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
  );
}

export default App;



