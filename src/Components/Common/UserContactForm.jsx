// UserContactForm.js

import React from 'react';
import CtaButtonUser from './CtaButtonUser';


function UserContactForm() {
  return (
    <div className="user-contact-form">
      <form>
        <h2>Leave a Message</h2>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="suggestion">Your Suggestion:</label>
          <textarea id="suggestion" placeholder="Your suggestion to us" rows="4"></textarea>
        </div>
        <CtaButtonUser text="Submit" />
      </form>
    </div>
  );
}

export default UserContactForm;
