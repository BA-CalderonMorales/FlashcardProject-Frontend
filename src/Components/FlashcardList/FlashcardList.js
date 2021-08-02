import React, { useState, useEffect } from 'react'
import Flashcard from '../Flashcard/Flashcard';

const FlashcardList = ({filteredDeck}) => {
    return ( 
        <>
            <div className="container-fluid" id="flashcard-display">
                {
                    filteredDeck.map((card) => {
                        return <Flashcard card={card} key={card.id} />
                    })
                }
            </div>
        </>
    );
}


export default FlashcardList;