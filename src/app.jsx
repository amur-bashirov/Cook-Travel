import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Create } from './create/create';
import { Search } from './search/search';
import { About } from './about/about';




export default function App() {
    return (
      <BrowserRouter>
        <div className="body bg-dark text-dark">
          <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark d-flex">
              <NavLink className="navbar-brand" to=""><em>Eat&Travel</em><sup>&reg;</sup></NavLink>
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="search">Search</NavLink>
                </li>
                <li className="nav-item">
<<<<<<< HEAD
                  <NavLink className="nav-link" to="/">Login</NavLink>
                </li>
                <li className="nav-item">
=======
>>>>>>> 316a980f4429e7eacbc5c4481f5d1a3d546b989c
                  <NavLink className="nav-link" to="create">Create</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          
          
      
          <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/create' element={<Create />} />
            <Route path='/search' element={<Search />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      
      
          <footer className="container-fluid fixed-bottom">
            <nav className="navbar navbar-dark d-flex justify-content-between">
              <a className="navbar-brand" href="#"><em>Eat&Travel</em><sup>&reg;</sup></a>
              <div className="d-flex gap-2">
                <a href="https://github.com/amur-bashirov/Cook-Travel.git"> Amur Bashirov's GitHub</a>
              </div>
            </nav>
          </footer>
        </div>
    </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }