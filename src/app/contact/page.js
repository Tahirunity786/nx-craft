'use client';
import Input from '@/component/Input/Input';
import React from 'react';
import './contact.css';

// Reusable FAQ Component
const FAQItem = ({ questionId, questionText, answerText }) => (
  <div className="mb-3">
    <a
      className="d-flex align-items-center justify-content-between nav-link mb-2 b-botm pt-2 pb-2"
      data-bs-toggle="collapse"
      href={`#${questionId}`}
      role="button"
      aria-expanded="false"
      aria-controls={questionId}
    >
      {questionText}
      <span aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
        </svg>
      </span>
    </a>
    <div className="collapse" id={questionId}>
      <div className="card card-body">
        {answerText}
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <section className="container pe-lg-4 ps-lg-4 mt-5 mb-5">
        <div className="row">
          {/* FAQ Section */}
          <div className="col-lg-5 pe-5 ps-5 mb-5">
            <div className="mb-4">
              <h1>Frequently Asked Questions</h1>
            </div>
            {[
              { questionId: 'q1', questionText: 'What is your refund policy?', answerText: 'Our refund policy is ...' },
              { questionId: 'q2', questionText: 'How do I track my order?', answerText: 'You can track your order by ...' },
              { questionId: 'q3', questionText: 'Can I change my delivery address?', answerText: 'Yes, you can change it by ...' },
              { questionId: 'q4', questionText: 'What payment methods are available?', answerText: 'We accept the following methods ...' },
            ].map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>

          {/* Contact Section */}
          <div className="col-lg-7 pe-5 ps-5">
            <div className="mb-4 p-4 h-nx-contact f-nx">
              <div className="d-flex justify-content-between mb-4">
                <h2 className="form-h4 form-top-head fs-3">Contact Us</h2>
                <a href="tel:+923232963784" className="btn-nx" aria-label="Call Us">
                  <span className="me-2 ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                  </span>
                  +92 (323) 2963784
                </a>
              </div>

              <form method="post">
                <div className="row mb-3">
                  <div className="col-lg-6 mb-3">
                    <Input placeholder="Name*" type="text" className="w-100 input-form" required />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input placeholder="Email*" type="email" className="w-100 input-form" required />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-6 mb-3">
                    <Input placeholder="Contact No" type="tel" className="w-100 input-form" />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input placeholder="Message..." type="text" className="w-100 input-form" />
                  </div>
                </div>
 
                  <div className="mb-3 text-start">
                    <label htmlFor="Uploadfor" className="btn-nx0-form">Upload File</label>
                    <input type="file" hidden id="Uploadfor" />
                  </div>
                  
               
                <div className="mb-3 text-end">
                    <button type="submit" className="btn-nx-form">Submit</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
