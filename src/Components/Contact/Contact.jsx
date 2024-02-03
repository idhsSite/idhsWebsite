import React from 'react'
import OurContactDetails from './OurContactDetails'
import UserContactForm from './UserContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className='Contact-container' >
      <OurContactDetails />

      <UserContactForm />
    </div>
  )
}

export default Contact