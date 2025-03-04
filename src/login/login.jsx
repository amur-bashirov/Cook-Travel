import React from 'react';
import "../app.css";
import "./login.css";

export function Login() {
  return (
    <main className="container-fluid text-center">
      <div>
        <h1>Welcome to <em>Eat&Travel</em></h1>
        <p>Please log in to access all features.</p>
        <form method="get" action="play.html">
          <div>
            <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <p> Don't have an account? Sign up now to create and share your own recipes, get exclusive cooking tips, and explore travel advice from around the world!</p>
        </form>
      </div>
    </main> 
  );
}
