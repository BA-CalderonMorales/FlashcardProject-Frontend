import React from 'react'

const Flashcard = ({card}) => {
    return ( 
        <>
            <div>
                <p>Front Content: {card.front_content}</p>
                <p>Back Content: {card.back_content}</p>
                <p>Deck Id: {card.deck}</p>
            </div>
        </>
    );
}
 
export default Flashcard;