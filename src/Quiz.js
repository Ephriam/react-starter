import React from 'react';
import './Quiz.css'

const questions = [
  // Define your questions here
];

const Quiz = ({ step, onNext, onPrev }) => {
  const question = questions[step - 1];

  const handleAnswer = (answer) => {
    onNext(answer);
  };

  return (
    <section className="steps">
      <h1 className="quiz-question">{question}</h1>
      {/* Render answer options and handle user selection */}
      <button onClick={() => handleAnswer('Option 1')}>Option 1</button>
      <button onClick={() => handleAnswer('Option 2')}>Option 2</button>
      {/* Add more options as needed */}
      <div className="next-prev">
        {step > 1 && <button onClick={onPrev}>Previous</button>}
        <button onClick={() => onNext('')}>Next</button>
      </div>
    </section>
  );
};

export default Quiz;
