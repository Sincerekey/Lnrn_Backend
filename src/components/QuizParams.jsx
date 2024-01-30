import React, { useContext, useState } from 'react';
import QuizContext from '../Context/QuizContext';

function QuizParams() {
      // Access quiz context and state
    const quizContext = useContext(QuizContext);

  // Event handlers for form input changes
  const handleTopicChange = (event) => {
    quizContext.setTopic(event.target.value);
  };

  const handleExpertiseChange = (event) => {
    quizContext.setExpertise(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    quizContext.setNumQuestions(event.target.value);
  };

  const handleQuestionStyleChange = (event) => {
    quizContext.setQuestionStyle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    quizContext.setIsFormSubmitted(!quizContext.isFormSubmitted);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="topic">Topic:</label>
        <select id="topic" name="topic" onChange={handleTopicChange}>
          <option value=''></option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
          <option value="Node">Node</option>
        </select>

        <label htmlFor="expertise">Expertise:</label>
        <select id="expertise" name="expertise" onChange={handleExpertiseChange}>
          <option value=''></option>
          <option value="Beginner">Beginner</option>
          <option value="Novice">Novice</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>

        <label htmlFor="numQuestions">Number of Questions:</label>
        <select id="numQuestions" name="numQuestions" onChange={handleNumQuestionsChange}>
          <option value=''></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="questionStyle">Style of Questions:</label>
        <select id="questionStyle" name="questionStyle" onChange={handleQuestionStyleChange}>
          <option value=''></option>
          <option value="Normal">Normal</option>
          <option value="Pirate">Pirate</option>
          <option value="60's Ganster">60's Ganster</option>
          <option value="50's Transatlantic accent">50's Transatlantic accent</option>
        </select>

        <button type="submit">Generate Quiz</button>
      </form>
    </div>
  );
}

export default QuizParams;