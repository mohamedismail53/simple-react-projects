import React from "react";
import ReactDom from "react-dom/client";
import "../src/styles.css"

import logo from '../src/react-icon.png'

function Main() {
  return (
      <main>
          <h1 className="main--title">Fun facts about React</h1>
          <ul className="main--facts">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
      </main>
  )
}

function Navbar() {
  return (
      <nav>
          <img src={logo} alt="React Logo" className="nav--icon" />
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
  )
}


function App() {
  return (
      <div className="container">
          <Navbar />
          <Main />
      </div>
  )
}



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
