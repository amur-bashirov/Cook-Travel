import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import "../app.css";
import "./login.css";


export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/search')}>
        Search
      </Button>
      <Button variant='primary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}