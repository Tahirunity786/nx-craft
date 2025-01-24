'use client'
import { useState } from 'react';
import './login.css'


const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
   try {
   
         const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/login`, {
           method: 'POST',
           body: formData,
           headers: {
             'X-CSRFToken': getCsrfToken(), // For CSRF protection, if applicable
           },
         });
   
         if (!response.ok) {
           throw new Error(`Failed to submit: ${response.statusText}`);
         }
   
         const data = await response.json();

         console.log(data)
  


       } catch (error) {
        console.log(error)
       } finally {
        console.log("ok final")
       }
     }
   
     // Utility function to get CSRF token if needed (for Django or similar backend)
     function getCsrfToken() {
       return document.cookie
         .split('; ')
         .find((row) => row.startsWith('csrftoken='))
         ?.split('=')[1];
     }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to access your account</p>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              name='username'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
             name='password'
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="login-footer">
          <p>
            Forgot your password? <a href="/reset-password">Reset it</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page
