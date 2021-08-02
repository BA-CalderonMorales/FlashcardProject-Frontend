import React, {useState} from 'react'
import UpdateFlashcard from '../UpdateFlashcard/UpdateFlashcard';

const Flashcard = ({card, index, amountOfCards}) => {
    const [editButtonClicked, setEditButtonClicked] = useState(false);
    return ( 
        <>
            <div>
                <p>Front Content: {card.front_content}</p>
                <p>Back Content: {card.back_content}</p>
                <p>Deck Id: {card.deck}</p>
                <p>{index}/{amountOfCards}</p>
                <button onClick={() => setEditButtonClicked(true)} >Edit</button>
                {editButtonClicked ? <UpdateFlashcard card_id={card.id} /> : <> </>}
            </div>
        </>
    );
}
 
export default Flashcard;