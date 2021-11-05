import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './index.css';
import { auth } from '../firebase-config';

function SignIn() {
  const SignIn = async () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    try {
      const user = await createUserWithEmailAndPassword(
        console.log(user),
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }

    return (
      <div className='container'>
        <h1>Sign in</h1>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={SignIn}>Sign In</button>
      </div>
    );
  };
}
export default SignIn;
