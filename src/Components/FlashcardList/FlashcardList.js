import React, {useState, useRef, useEffect} from 'react'
import Flashcard from '../Flashcard/Flashcard';
import AddFlashcard from '../AddFlashcard/addFlashcard';

const FlashcardList = ({filteredDeck, setDeck, deck, previousClicked, nextClicked, index}) => {
    return ( 
        <>
            <button type="button" onClick={() => previousClicked}>Previous</button>
            <div className="container-fluid" id="flashcard-display">
                <>
                <Flashcard card={filteredDeck[index]} key={filteredDeck[index].id} index={index+1} amountOfCards={filteredDeck.length} />
                <AddFlashcard setDeck={setDeck} deck={deck} />
                </>
            </div>
            <button type="button" onClick={() => nextClicked}>Next</button>
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