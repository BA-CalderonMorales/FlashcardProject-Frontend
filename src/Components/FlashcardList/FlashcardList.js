import React, { useState, useEffect } from 'react'
import Flashcard from '../Flashcard/Flashcard';

const FlashcardList = ({flashcardArray}) => {


    // { collectionId } Primary Key
    return ( 
        <>
            <div className="container-fluid" id="flashcard-display">
                <Flashcard />
                <button>
                Click me
                </button>
            </div>
        </>
    );
}


export default FlashcardList;