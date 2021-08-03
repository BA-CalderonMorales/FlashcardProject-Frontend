import React, {useState, useRef, useEffect} from 'react'
import Flashcard from '../Flashcard/Flashcard';
import AddFlashcard from '../AddFlashcard/addFlashcard';

const FlashcardList = ({filteredDeck, setDeck, deck, index, setIndex}) => {
    

    const previousClicked = () => {
        /* function: goToPreviousBook */
        let tempFlashcardPosition = index;
        tempFlashcardPosition--;
        if (tempFlashcardPosition < 0) {
            tempFlashcardPosition = filteredDeck.length -1;
        }
        console.log(tempFlashcardPosition);
        setIndex(tempFlashcardPosition);
      }
    
      const nextClicked = () => {
          /* function: goToNextBook */
          let tempFlashcardPosition = index;
          tempFlashcardPosition++;
          if (tempFlashcardPosition === filteredDeck.length) {
              tempFlashcardPosition = 0;    
          }
          console.log(tempFlashcardPosition);
          setIndex(tempFlashcardPosition);
      }
      const currentCard = filteredDeck[index]

    return ( 
        <>
            <button type="button" onClick={() => previousClicked()}>Previous</button>
            <div className="container-fluid" id="flashcard-display">
                {
                    filteredDeck.length == 0 ? <></> :
                    <>
                    <Flashcard card={currentCard} key={currentCard.id} index={index} amountOfCards={filteredDeck.length} />
                    </>
                    
                }
                
            </div>
            <AddFlashcard setDeck={setDeck} deck={deck} />
            <button type="button" onClick={() => nextClicked()}>Next</button>
        </>
    );
}

export default FlashcardList;
// {
//     filteredDeck.map((card, index) => {
//         if (index === currentCard) {
//             return 
//         }
//     })
// }