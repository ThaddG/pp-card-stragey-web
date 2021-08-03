import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  console.log("dsldm", location)
  return (
    <div>
      <h1>contact page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
