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
        
        <h1 className='projects-title'>Projects</h1>
        <div className='projects-cont'>
          <div className='project-cont'>
            <img className='project-picture' src = {spot} alt= 'Tiny spotlight screen'/>
            <h4>Tiny Spotlight</h4>
            <p>A tool designed to shine a spotlight on the less popular artists, 
              a seed based on a song title, artist name, or genre of music is used to generate a playlist.</p>
            <div className='footer-tech'><a href='https://github.com/EmanueleParlascino-Personal/Tiny-Spotlight'><i class="ci ci-github-light ci-3x " ></i></a> </div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {pow} alt= 'pow website screen'/>
            <h4>Piece of Work</h4>
            <p>Used by the member of Salt's PGP(postgraduate program) to manage assignment and submissions and compare results. I was the lead of the Backend team on this project</p>
            <div className='footer-tech'><a href='https://github.com/Task-Fighters/piece-of-work-BE'><i class="ci ci-github-light ci-3x " ></i></a> </div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {herta} alt= 'herta website screen'/>
            <h4>Herta's Website</h4>
            <p>A webshop made for Greek metal band Herta, created and designed by me, includes a backend to updated show dates, shop items etc..</p>
            <div className='footer-tech'><a href='https://github.com/EmanueleParlascino-Personal/herta-band'><i class="ci ci-github-light ci-3x " ></i></a> </div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {unbiased} alt= 'unbiased website screen'/>
            <h4>Unbiased</h4>
            <p>A 3 days project made during a Hackaton, the objective is to anonimize CVs and resume to avoid subconscious Bias by hiring staff. I lead the frontend team.</p>
            <div className='footer-tech'><a href='https://github.com/EmanueleParlascino-Personal/Unbiased'><i class="ci ci-github-light ci-3x " ></i></a> </div>
          </div>
          <div className='project-cont'>
            <img className='project-picture' src = {recipeScreen} alt= 'unbiased website screen'/>
            <h4>Recipe App</h4>
            <p>Final project for the .Net Fullstack Bootcamp, uses external apis to search recipe based on a search term, you can save the recipes on the platform and add notes of your own</p>
            <div className='footer-tech'><a href='https://github.com/Masterswordish/frontend-petanqueflow-recipes'><i class="ci ci-github-light ci-3x " ></i></a> </div>
          </div>
          <div className='project-cont'>
            <div className='phonesCont'>
              <img className='phoneScreen' src = {arya1} alt= 'arya screen'/>
              <img className='phoneScreen' src = {arya2} alt= 'arya screen2'/>
            </div>
            <h4>Arya</h4>
            <p>Fashion orient social media app developed in React Native, you can couple exclusive clothing items with rfid tags and show it off to your friends, see what celebrities are wearing right now and other exciting features. Developments has been halted since 2020 because of the pandemic.</p>
            <div className='footer-tech'><a href='https://github.com/aryasrl/Arya'><i class="ci ci-github-light ci-3x " ></i></a> </div>
          </div>
        </div>
        <div className='about-cont'>
          <h1>About me</h1>
          <p className='about-p'>
            I learned the fundamentals of programming when I studied computer science at GMIT, Galway. <br/>
            I continued developing my skills after that with passion projects and working in a startup together with a childhood friend from Italy, <br/>
            together we made a social media mobile app centered around Fashion called Arya, we got quite far with the design and functionality, but the project was halted in 2020 because of the pandemic.<br/>
            my next job was at an Auctioneering firm in the small town in Ireland where I was living at the time, where I functioned as IT assistant and managed a database of properties. <br/>
            In 2022 I decided to leave Ireland for a lifestyle change and moved to Amsterdam. <br/>
            In September of that year I was accepted into a bootcamp for fullstack .Net developers called Salt, <br/>
            I finished the course successfully and I mastered the stack enough to get hired as instructor at the bootcamp, I taught for 3 months and then moved on to be a developer at the company<br/>
            I developed some internal tools in the backend. My adventure with Salt endend in August 2023 and I am now looking for my next step!<br/>
            I am always looking to learn new things and challenging myself as much as possible, I want to help people make stuff that makes the world a better place!<br/>
            Music is also my biggest passions, I love to play music, listen to new music everyday and talk about music to anyone who's interested! <br/>
            Other than that in my free time I also train in a martial art called Kali, I like to go bouldering, play games like chess, D&D, roguelikes, puzzle and adventure.<br/>
            I believe that everyone you meet know something you don't so I approach every conversation I have with the intention to learn!<br/>
          </p>
        </div>
      </div>
  );
}

export default App;



