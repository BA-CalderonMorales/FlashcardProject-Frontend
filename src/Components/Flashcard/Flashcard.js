import React, {useState, useRef} from 'react'
import UpdateFlashcard from '../UpdateFlashcard/UpdateFlashcard';
import AddFlashcard from '../AddFlashcard/addFlashcard';
import './Flashcard.css'

const Flashcard = ({card, index, amountOfCards, cardDidMount}) => {

    // 
    const [addButtonClicked, setAddButtonClicked] = useState(false);
    
    // Holds the state of whether or not the edit button has been clicked.
    const [editButtonClicked, setEditButtonClicked] = useState(false);

    // Holds the state of whether the user wants to see the front or back of 
    // the flashcard.
    const[flip, setFlip] = useState(false);

    return ( 
        <>
            <div className="col-6 d-flex justify-content-center align-items-center p-2">
                {addButtonClicked ? <></> : <button className="btn btn-success" id="function-btn" onClick={() => setAddButtonClicked(true)}>
                    <i class="fas fa-plus"></i>
                </button>}
                {addButtonClicked ? <AddFlashcard deckId={card.deck} cardDidMount={cardDidMount} addButtonClicked={addButtonClicked} setAddButtonClicked={setAddButtonClicked} /> : <> </> }
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center p-2">
                {editButtonClicked ? <></> : <button className="btn btn-success" id="function-btn" onClick={() => setEditButtonClicked(true)}>
                    <i class="fas fa-edit"></i>
                </button>}
                {editButtonClicked ? <UpdateFlashcard deckId={card.deck} cardDidMount={cardDidMount} card_id={card.id} editButtonClicked={editButtonClicked} setEditButtonClicked={setEditButtonClicked} /> : <> </>}
            </div>
            {
                flip ? 
                    <div className={`flashcard ${flip ? 'front' : ''}`} onClick={ () => setFlip(!flip)}> 
                        { card.back_content }
                        <div className="index" >{index + 1}/{amountOfCards}</div>
                    </div>
                :
                    <div className={`flashcard ${!flip ? 'back' : ''}`} onClick={ () => setFlip(!flip)}> 
                        { card.front_content }
                        <div className="index" >{index + 1}/{amountOfCards}</div>
                    </div>
            } 
        </>  
    );
}

// setDeck={setDeck} deck={deck}

export default Flashcard;