import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Create } from './create/create';
import { Created } from './create/created';
import { Search } from './search/search';
import { About } from './about/about';
import { AuthState } from './login/authState';




export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);



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
                {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='search'>
                    Search
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='create'>
                    Create
                  </NavLink>
                </li>
              )}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Login</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          
          
      
          <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
            <Route path='/create' element={<Create />} />
            <Route path='/search' element={<Search userName={userName}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/created' element={<Created />} />
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