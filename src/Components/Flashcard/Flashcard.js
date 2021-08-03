import React, {useState, useRef} from 'react'
import UpdateFlashcard from '../UpdateFlashcard/UpdateFlashcard';
import './Flashcard.css'

const Flashcard = ({card, index, amountOfCards}) => {
    const [editButtonClicked, setEditButtonClicked] = useState(false);
    const[flip, setFlip] = useState(false);

    return ( 
        <>
        <div className="row">
            <div className="col-10"></div>
            <div className="col-2">
                <div className="index">{index + 1}/{amountOfCards}</div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <div className={ `flashcard ${flip ? 'flip' : '' }` } 
                onClick={ () => setFlip(!flip)} 
                >
                    {flip ? 
                    <div id="back" >
                        { card.back_content }
                    </div>
                    :
                    <div id="front" >
                        { card.front_content }
                    </div>
                    }    
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-10"></div>
            <div className="col-2">
                {editButtonClicked ? <></> : <button onClick={() => setEditButtonClicked(true)}>
                    Edit
                </button>}
                {editButtonClicked ? <UpdateFlashcard card_id={card.id} editButtonClicked={editButtonClicked} setEditButtonClicked={setEditButtonClicked} /> : <> </>}
            </div>
        </div>
        
        </>  
    );
}
 
export default Flashcard;