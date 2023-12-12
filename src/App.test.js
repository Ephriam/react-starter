import React, { useState } from 'react';
import Quiz from './Quiz';
import ThankYouPage from './ThankYouPage';

const App = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([]);

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle submission logic (e.g., sending answers to a server)
    // Redirect to the thank you page or show a modal
  };

  return (
    <div className="App">
      {step <= 5 ? (
        <Quiz step={step} onNext={handleNext} onPrev={handlePrev} />
      ) : (
        <ThankYouPage answers={answers} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
