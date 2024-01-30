import React, { useEffect, useState, useContext } from 'react';
// import { config } from 'dotenv-webpack'; // Import the config method from dotenv-webpack
import OpenAI from "openai";
import QuizContext from '../Context/QuizContext';

function QuizGenerator() {

    // Access quiz context
    const {topic, expertise, numQuestions, questionStyle, isFormSubmitted} = useContext(QuizContext);   

  // Initialize OpenAI object
const openai = new OpenAI({
    apiKey: 'Check the .env file for the API key. Dont forget to delete the API key before pushing to GitHub.',
    dangerouslyAllowBrowser: true,
});

  // Function to generate quiz content
async function main() {
  // config(); // Call the config method to load environment variables
  const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `You are a quiz generator. The quiz will focus on a coding language, set at a specific level of expertise, with a specified number of questions, and a unique style of questioning such as a 60's gangster, a pirate, a 50's transatlantic accent, etc. 
        We'll begin with the first question and progress question by question until all are answered. Let's get started; The topic of this quiz is ${topic}, set at ${expertise} level. This quiz will consist of ${numQuestions} questions and should be presented in a ${questionStyle} style of speaking.` }],
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
}

  // State to hold quiz response
const [response, setResponse] = useState([]);

useEffect(() => {
      // Run this effect when the values in the quizContext change
  if (topic && expertise && numQuestions && questionStyle){
  main().then(result => {
    setResponse(result);
  });}
}, [isFormSubmitted]);

  return (
    <div className="App">
      <span>{response}</span>
    </div>
  );
}

export default QuizGenerator;