// FAQComponent.js

import React, { useState } from 'react';
import './FAQ.css'; // Import your CSS file for styling


const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <h1>FAQ -Freqently asked questions</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="question" onClick={() => toggleAnswer(index)}>
            "Q": {item.question}
          </div>
          <div className={`answer ${activeIndex === index ? 'active' : ''}`}>
            "A":{item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
