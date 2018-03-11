import React from 'react'

import './ContactForm.css'

const ContactForm = () => (

  <form className="contact-form" method="POST" action="https://script.google.com/macros/s/?key=API_KEY/exec">
    <h2> CONTACT US </h2>
    <div className="form-field">
      <label htmlFor="name">
        <div className="label-content">Name:</div>
        <input type="text" name="name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email:</div>
        <input type="email" name="email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message:</div>
        <textarea className="stretch" name="message" rows="5" required />
      </label>
    </div>

    <button type="submit">Send</button>

    <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Hey, YOU ARE AWESOME! Thanks for taking the time to contact us, we will get back to you ASAP.</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>The message could not be sent, cause a message occurred.</p>
        </div>
      }
    </div>
  </form>
)

export default ContactForm;
