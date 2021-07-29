import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList.js';
import './App.css';
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState([]); // SAMPLE_FLASHCARDS
  const [categories, setCategories] = useState([]);
  
  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios
    .get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories);
    })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
    .get('https://opentdb.com/api.php', {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)), 
          answer]
        return {
          id: `${index}-${Date.now()}`,
          front: decodeString(questionItem.question),
          back: questionItem.correct_answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
      // console.log(res.data);
    })
  }

  return (
    <>
      <form className="header" onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={ categoryEl }>
            {categories.map(category => {
              return <option value={ category.id } key={ category.id }>{ category.name }</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number Of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} 
          ref={ amountEl } />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      
      <div className="container">
        <FlashcardList flashcards={ flashcards } />
      </div>
    </>
  );
}

export default App;

// const SAMPLE_FLASHCARDS = [
//   {
//     id: '1',
//     front: "Here is a Question (1)",
//     back: "Answer (1)",
//     options: ["A", "B", "C"]
//   },
//   {
//     id: '2',
//     front: "Here is a Question (2)",
//     back: "Answer (2)",
//     options: ["A", "B", "C"]
//   }
// ]