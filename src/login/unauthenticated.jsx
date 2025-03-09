import React from 'react';
import "../app.css";
import "./login.css";

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
    <main className="container-fluid text-center">
    <div>
      <h1>Welcome to <em>Eat&Travel</em></h1>
      <p>Please log in to access all features.</p>
      <form method="get" action="play.html">
        <div className='input-group mb-3'>
        <span className='input-group-text'>@</span>
        <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
        <span className='input-group-text'>🔒</span>
        <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
        Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
        Create
        </Button>
        <p> Don't have an account? Sign up now to create and share your own recipes, get exclusive cooking tips, and explore travel advice from around the world!</p>
      </form>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </div>
  </main> 
    </>

  );
}