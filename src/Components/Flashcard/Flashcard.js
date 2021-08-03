import React, {useState} from 'react'
import UpdateFlashcard from '../UpdateFlashcard/UpdateFlashcard';

const Flashcard = ({card, index, amountOfCards}) => {
    const [editButtonClicked, setEditButtonClicked] = useState(false);

    return ( 
        <>
        
            
            <p>Back Content: {card.back_content}</p>
            <p>Front Content: {card.front_content}</p>
            <p>Deck Id: {card.deck}</p>
            <p>{index + 1}/{amountOfCards}</p>
            <button onClick={() => setEditButtonClicked(true)} >Edit</button>
            {editButtonClicked ? <UpdateFlashcard card_id={card.id} /> : <> </>}
        </>  
    );
}
 
export default Flashcard;