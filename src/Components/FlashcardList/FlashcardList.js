import React, { useState, useEffect } from 'react'
import Flashcard from '../Flashcard/Flashcard';

const FlashcardList = ({collectionId}) => {
    const [theFlashcards, setFlashcards] = useState(SAMPLE_CARDS);
    const [test, setTester] = useState('');

    useEffect(() => {
        setTester(`You clicked ${test} times`);  
    });

    // { collectionId } Primary Key
    return ( 
        <>
            <div className="container-fluid" id="flashcard-display">
                <Flashcard flashcards={theFlashcards}/>
                <button onClick={() => setTester("Tester")}>
                Click me
                </button>
            </div>
        </>
    );
}

const SAMPLE_CARDS = [
    {
      id: '1',
      front_content: "Here is a Question (1)",
      back_content: "Answer (1)",
      deck: 1
    },
    {
      id: '2',
      front_content: "Here is a Question (2)",
      back_content: "Answer (2)",
      deck: 2
    },
    {
      id: '3',
      front_content: "Here is a Question (3)",
      back_content: "Answer (3)",
      deck: 1
    }
  ]
 
export default FlashcardList;