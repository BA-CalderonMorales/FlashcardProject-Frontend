import React, { useState, useEffect } from 'react';
import CollectionList from './Components/CollectionList/CollectionList';
import './App.css';
import FlashcardList from './Components/FlashcardList/FlashcardList';
import Header from './Components/Header/Header';
import axios from 'axios';

function App() {
  const [collections, setCollections] = useState([]) // SAMPLE_COLLECTIONS
  const [collectionId, setCollectionId] = useState(0);
  const [deck, setDeck] = useState([]); // SAMPLE_CARDS
  const [filteredDeck, setFilteredDeck] = useState([]);
  const [index, setIndex] = useState(0); // Position one in array of filtered deck.
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [collectionAdded, setCollectionAdded] = useState(false);

  useEffect(() => {
    // Retrieves all the collections in the Flashcard Collection API database.
    axios.get('http://127.0.0.1:8000/all_decks/')
    .then(response => {
      setCollections(response.data);
    })
  }, [cardAdded, collectionAdded])

  

  useEffect(() => {
        // Retrieves all the cards in the Flashcard Collection API database, regardless of
        // what collection their attached to.
    axios.get('http://127.0.0.1:8000/all_cards/')
    .then(response => {
      let all_cards = response.data
      setDeck(all_cards);
    })
  }, [cardAdded, collectionAdded])

  useEffect(() => {
    // Filters the deck of cards based off of the specific deck id associated 
    // with the deck (collection) chosen.
    let tempFilteredCards = deck.filter((card) => {
      if (card.deck === collectionId) {
        return card;
      }
    })
    setFilteredDeck(tempFilteredCards);
  }, [collectionId, deck, cardAdded, collectionAdded])

  const cardDidMount = () =>{
    setCardAdded(!cardAdded)
  }

  const collectionDidMount = () => {
    setCollectionAdded(!collectionAdded)
  }


  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-2 col-md-2 col-lg-2">
            <CollectionList collectionDidMount={collectionDidMount} collections={collections} setIndex={setIndex} setCollectionId={setCollectionId} setIsCollectionClicked={setIsCollectionClicked}  />
          </div>
          <div className="col col-sm-10 col-md-10 col-lg-10">
            {isCollectionClicked ? <FlashcardList collectionId={collectionId} cardDidMount={cardDidMount} filteredDeck={filteredDeck} setDeck={setDeck} setIndex={setIndex} index={index} deck={deck} /> : <></> }
          </div>
        </div>
      </div>
    </>
  );
}

// const SAMPLE_CARDS = [
//   {
//     id: '1',
//     front_content: "1",
//     back_content: "(1)",
//     deck: 1
//   },
//   {
//     id: '2',
//     front_content: "2",
//     back_content: "(2)",
//     deck: 2
//   },
//   {
//     id: '3',
//     front_content: "3",
//     back_content: "(3)",
//     deck: 1
//   }
// ]


// const SAMPLE_COLLECTIONS = [
//   {
//     id: '1',
//     name: "Title (1)",
//     likes: "Answer (1)",
//     dislikes: ["A", "B", "C"]
//   },
//   {
//     id: '2',
//     name: "Title (2)",
//     likes: "Answer (2)",
//     dislikes: ["A", "B", "C"]
//   }
// ]

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