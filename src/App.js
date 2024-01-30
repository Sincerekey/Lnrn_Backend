import React, { useState } from 'react';
import QuizParams from './components/QuizParams';
import QuizGenerator from './components/QuizGenerator';
import QuizContext from './Context/QuizContext';

function App() {
    // Define state variables for topic, expertise, numQuestions, and questionStyle

  const [topic, setTopic] = useState('');
  const [expertise, setExpertise] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [questionStyle, setQuestionStyle] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

 // Create a context value object with the state variables and their corresponding setter functions

  const quizContextValue = {
    topic,
    expertise,
    numQuestions,
    questionStyle,
    isFormSubmitted,
    setTopic,
    setExpertise,
    setNumQuestions,
    setQuestionStyle,
    setIsFormSubmitted,
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      <QuizParams />
      <br />
      <QuizGenerator />
    </QuizContext.Provider>
  );
}

export default App;
