'use client'
import { useState } from 'react';
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function setToken(token) {
    try {
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error storing the token: ', error);

    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);


    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/login`, {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRFToken': getCsrfToken(), // Adjust if CSRF token is needed
        },
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Unexpected error has occurred. Please try again!');
        return;
      }
      await setToken(data.token.access); // Save the token appropriately
      toast.success('Login Successful!');

      // Redirect user to the dashboard
      router.push('/dashboard/home');
    } catch (error) {
      toast.error(error.message || 'Unexpected error has occurred. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  // Utility function to get CSRF token if needed (for Django or similar backend)
  function getCsrfToken() {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
  }

  return (
    <>
      <ToastContainer />
<div className='d-flex align-item-center justify-content-center w-100'>
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
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Log In...' : 'Log In'}
            </button>
          </form>
          <div className="login-footer">
            <p>
              Forgot your password? <a href="/reset-password">Reset it</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Page
