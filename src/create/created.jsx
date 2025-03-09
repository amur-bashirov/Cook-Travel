import React from 'react';
import "../app.css"
import "./create.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export function Created() {
    return (
        <main className="main-container">
        <div>
            <h2>Post Created Successfully!</h2>
            <p>Your post has been saved.</p>
             <Button variant='primary' onClick={() => navigate('/search')}>
            Search
            </Button>
            <Button variant='primary' onClick={() => navigate('/create')}>
            Create another
            </Button>
        </div>
        </main> 
    );
  }