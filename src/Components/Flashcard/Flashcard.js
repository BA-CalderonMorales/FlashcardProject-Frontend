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
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <div className={ `flashcard ${flip ? 'flip' : '' }` } 
                onClick={ () => setFlip(!flip)} 
                >
                    {flip ? 
                        <div className="random"> 
                            <div id="back" >
                                { card.back_content }
                                
                            </div>
                            <div className="index" >{index + 1}/{amountOfCards}</div>
                        </div>
                    :
                    <div className="random"> 
                        <div id="front" >
                            { card.front_content }
                        </div>
                        <div className="index" >{index + 1}/{amountOfCards}</div>
                    </div>
                    }    
                </div>
            </div>
        </div>
        <div className="row p-2">
            <div className="col-6">
                {addButtonClicked ? <></> : <button className="btn btn-primary" onClick={() => setAddButtonClicked(true)}>
                    Add a Card
                </button>}
                {addButtonClicked ? <AddFlashcard deckId={card.deck} cardDidMount={cardDidMount} addButtonClicked={addButtonClicked} setAddButtonClicked={setAddButtonClicked} /> : <> </> }

                {editButtonClicked ? <></> : <button className="btn btn-primary" onClick={() => setEditButtonClicked(true)}>
                    Edit
                </button>}
                {editButtonClicked ? <UpdateFlashcard deckId={card.deck} cardDidMount={cardDidMount} card_id={card.id} editButtonClicked={editButtonClicked} setEditButtonClicked={setEditButtonClicked} /> : <> </>}
            </div>
            <div className="col-6"></div>
        </div>
        
        </>  
    );
}

// setDeck={setDeck} deck={deck}

export default Flashcard;