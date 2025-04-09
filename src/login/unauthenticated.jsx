// Unauthenticated.jsx

import React from 'react';
import "../app.css";
import "./login.css";
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

// You might want to move this to a separate module for reuse.
function connectWebSocket(userName) {
  const wsUrl = `ws://${window.location.host}?userName=${encodeURIComponent(userName)}`;
  const socket = new WebSocket(wsUrl);

  socket.addEventListener('open', (event) => {
    console.log('WebSocket connection established:', event);
    // Optionally, send an initial identification message
    socket.send(JSON.stringify({ type: 'register', userName }));
  });

  socket.addEventListener('message', (event) => {
    console.log('Message received from server:', event.data);
  });

  socket.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
  });

  socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
  });

  // Store the WebSocket object as needed. You can, for instance,
  // attach it to the window object or send it into a global store.
  window.myWebSocket = socket;

  return socket;
}

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);

      // Initiate the WebSocket connection before triggering the onLogin callback
      connectWebSocket(userName);

      // Call onLogin to update your app’s auth state.
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div>
        <p>Please log in to access all features.</p>
        <form method="get" action="play.html">
          <div className='input-group mb-3'>
            <span className='input-group-text'>@</span>
            <input
              className='form-control'
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder='your@email.com'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>🔒</span>
            <input
              className='form-control'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
            />
          </div>
          <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
            Login
          </Button>
          <Button variant='primary' onClick={() => createUser()} disabled={!userName || !password}>
            Create
          </Button>
          <p>
            Don't have an account? Sign up now to create and share your own recipes, get exclusive cooking
            tips, and explore travel advice from around the world!
          </p>
        </form>
        <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
      </div>
    </>
  );
}
