import React from 'react'
import DefaultFlashcard from '../DefaultFlashcard/DefaultFlashcard';
import Flashcard from '../Flashcard/Flashcard';
import './FlashcardList.css'

const FlashcardList = ({filteredDeck, index, setIndex, cardDidMount, collectionId}) => {

    const DefaultCard= {
        front_content: "test",
        back_content: "hello",
        deck: collectionId
    }

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
            <div className="col-12 p-2" id="displayed-flashcard" >
                {
                    filteredDeck.length == 0 ? <DefaultFlashcard cardDidMount={cardDidMount} card={DefaultCard}/> :
                    <>
                    <div className="row">
                        <Flashcard cardDidMount={cardDidMount} card={currentCard} index={index} amountOfCards={filteredDeck.length} key={currentCard.id} />
                        <div className="col-6 d-flex justify-content-center p-2">
                            <button type="button" className="btn btn-dark" id="left-button" onClick={() => previousClicked()}><i class="fas fa-chevron-left"></i></button>
                        </div>
                        <div className="col-6 d-flex justify-content-center p-2">
                            <button type="button" className="btn btn-dark" id="right-button" onClick={() => nextClicked()}><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                    </>
                }
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