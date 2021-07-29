import React, { useState, useEffect, useRef } from 'react';
import CollectionList from './Components/CollectionList/CollectionList';
import './App.css';
import axios from 'axios';

function App() {

  const [collections, setCollections] = useState(SAMPLE_COLLECTIONS)

  return (
    <>
      <CollectionList collections={ collections} />
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

