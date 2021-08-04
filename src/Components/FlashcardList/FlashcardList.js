import React, {useState, useRef, useEffect} from 'react'
import Flashcard from '../Flashcard/Flashcard';
import AddFlashcard from '../AddFlashcard/addFlashcard';
import './FlashcardList.css'

const FlashcardList = ({filteredDeck, setDeck, deck, index, setIndex}) => {
    

    const previousClicked = () => {
        // Allows a user to go to the previous flashcard in a collection of flashcards.
        let tempFlashcardPosition = index;
        tempFlashcardPosition--;
        if (tempFlashcardPosition < 0) {
            tempFlashcardPosition = filteredDeck.length -1;
        }
        console.log(tempFlashcardPosition);
        setIndex(tempFlashcardPosition);
      }
    
      const nextClicked = () => {
        // Allows a user to go to the next flashcard in a collection of flashcards.
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
            <div className="container-fluid" >
                <div className="row">
                    <div className="col col-sm-12 col-md-2 col-lg-2 d-flex justify-content-center align-items center">
                        <div className="row" >
                            <div className="col">
                                <div id="previous">
                                <button type="button" onClick={() => previousClicked()}>Previous</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-8 col-lg-8 " >
                        {
                            filteredDeck.length == 0 ? <></> :
                            <div>
                                <Flashcard card={currentCard} index={index} amountOfCards={filteredDeck.length} key={currentCard.id}/>
                            </div>
                        }
                        <AddFlashcard setDeck={setDeck} deck={deck} />
                    </div>
                    <div className="col col-sm-12 col-md-2 col-lg-2 d-flex justify-content-center align-items center">
                        <div className="row" >
                            <div className="col">
                                <div id="next">
                                    <button type="button" onClick={() => nextClicked()}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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