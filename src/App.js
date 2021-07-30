import React, { useState, useEffect } from 'react';
import CollectionList from './Components/CollectionList/CollectionList';
import './App.css';
import FlashcardList from './Components/FlashcardList/FlashcardList';
// import axios from 'axios';

function App() {
  const [collections, setCollections] = useState(SAMPLE_COLLECTIONS)

  return (
    <>
      <div className="container-fluid">
        <CollectionList collections={collections} />
      </div>
    </>
  );
}

const SAMPLE_COLLECTIONS = [
  {
    id: '1',
    name: "Here is a Question (1)",
    likes: "Answer (1)",
    dislikes: ["A", "B", "C"]
  },
  {
    id: '2',
    name: "Here is a Question (2)",
    likes: "Answer (2)",
    dislikes: ["A", "B", "C"]
  }
]

export default App;

// const [count, setCount] = useState(0);

// // Similar to componentDidMount and componentDidUpdate:  
// useEffect(() => {    
// // Update the document title using the browser API    
// document.title = `You clicked ${count} times`;  });
/* <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
    Click me
    </button>
</div> */