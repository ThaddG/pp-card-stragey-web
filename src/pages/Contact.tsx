import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h1>contact page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
