import React from 'react';
import Register from '../components/Register';
import './index.css';

const SignUp = () => {
  return (
    <div className='auth-container'>
      <div className='wrap-auth'>
        <h2>Sign up</h2>
        <Register />
      </div>
    </div>
  );
};

export default SignUp;
