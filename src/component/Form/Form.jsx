import React, { useState } from 'react'
import Input from '../Input/Input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css'
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Utility function to get CSRF token if needed (for Django or similar backend)
  function getCsrfToken() {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/contact-us`, {
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
      // Optionally, reset the form
      event.target.reset();
      toast.success('Message received! We’ll contact you within an hour.')
    } catch (error) {
      toast.error(error || 'Unexpected error has occured, Please try again!')
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <ToastContainer />

      <div className="mb-4 p-lg-4 f-nx">
        <div className="d-flex justify-content-between mb-4">
          <h4 className='form-h4'>Book a free <br /> <span className='form-top-head'>Consulation</span></h4>
          <a href="tel:+923232963784" className="btn-nx" aria-label="Call Us">
            <span className="me-2 ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16" aria-label="Phone Icon">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </span>
            +92 (323) 2963784
          </a>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="mb-3">
            <Input
              name="name"
              placeholder='Name*'
              type='text'
              className='w-100 input-form'
              required
            />
          </div>
          <div className="mb-3">
            <Input
              name="email"
              placeholder='Email*'
              type='email'
              className='w-100 input-form'
              required
            />
          </div>
          <div className="mb-3">
            <Input
              name="contact_no"
              placeholder='Contact no'
              type='tel'
              className='w-100 input-form'
            />
          </div>
          <div className="mb-3">
            <Input
              name="message_detail"
              placeholder='*message...'
              type='tel'
              className='w-100 input-form'
            />
          </div>
          <div className="mb-2 text-center">
            <button type='submit' className='btn-nx-form'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
