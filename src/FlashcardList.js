import React from 'react'
import Flashcard from './Flashcard.js'

export default function FlashcardList({ flashcards }) {
    // ({ flashcards }) replaces doing props.flashcards
    return (
        <div className="card-grid">
            { flashcards.map(card => {
                return <Flashcard flashcard={ card } key={ card.id } />
            }) }
            {
            /* When react goes to rerender the array of  
                flashcard components, it will only rerender
                the ones that will actually change in 
                the flashcard array. This is why card.id
                will be passed into Flashcard.js 
            */}
        </div>
    )
}
