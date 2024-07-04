import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to the homepage.</p>
        </section>
        <section id="about">
          <h1>About</h1>
          <p>Learn more about us.</p>
        </section>
        <section id="services">
          <h1>Services</h1>
          <p>Discover our services.</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>Get in touch with us.</p>
        </section>
      </header>
    </div>
    </>
  );
}

export default App
