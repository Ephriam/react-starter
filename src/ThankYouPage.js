import React from 'react';
import './ThankYouPage.css'

const ThankYouPage = ({ answers, onSubmit }) => {
  return (
    <div className="main thankyou-page">
      {/* Your thank you page content */}
      <h1>Thank You For Your Time!</h1>
      <span>Your submission has been received</span>
      {/* Display answers or additional information */}
      <div>
        {answers.map((answer, index) => (
          <p key={index}>{`Answer ${index + 1}: ${answer}`}</p>
        ))}
      </div>
      <button onClick={onSubmit}>Submit</button>
      {/* Add social media links and other content */}
    </div>
  );
};

export default ThankYouPage;
