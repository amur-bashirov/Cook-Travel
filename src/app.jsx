import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';




export default function App() {
    return (
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark d-flex">
            <a className="navbar-brand" href="#"><em>Eat&Travel</em><sup>&reg;</sup></a>
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" href="./about/logged_out_about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./search/search.html">Search</a>
              </li>
            </ul>
          </nav>
        </header>
        
        
    
        <main>App components go here</main>
    
    
        <footer className="container-fluid fixed-bottom">
          <nav className="navbar navbar-dark d-flex justify-content-between">
            <a className="navbar-brand" href="#"><em>Eat&Travel</em><sup>&reg;</sup></a>
            <div className="d-flex gap-2">
              <a href="https://github.com/amur-bashirov/Cook-Travel.git"> Amur Bashirov's GitHub</a>
            </div>
          </nav>
        </footer>
      </div>
    );
  }