import React from 'react'
import FAQ from '../Components/Common/FAQ'
import Blogs from '../Components/Common/Blogs'

import '../Pages/Pages.css'
import UserContactForm from '../Components/Common/UserContactForm';


function UserQuery() {

    const faqData = [
        { question: 'Who we are?', answer: 'We are Healthtech startup. Currently, we are operating in Bihar major districts like.....' },
        { question: 'What services does your health startup provide?', answer: '...' },
        { question: 'Who we are?', answer: 'We are Healthtech startup. Currently, we are operating in Bihar major districts like.....' },

        { question: 'Who we are?', answer: 'We are Healthtech startup. Currently, we are operating in Bihar major districts like.....' },
        { question: 'Who we are?', answer: 'We are Healthtech startup. Currently, we are operating in Bihar major districts like.....' },

        // Add more FAQ items as needed
      ];
  return (
    <div className='UserQuery'>
        <h1>We are happy to help you</h1>
         <div className="UserQuery-container">
          <FAQ faqData={faqData} />
          <Blogs />
          <UserContactForm/>
          
        </div>
    </div>
  )
}

export default UserQuery