import React, {useState, useRef} from 'react'
import UpdateFlashcard from '../UpdateFlashcard/UpdateFlashcard';
import './Flashcard.css'

const Flashcard = ({card, index, amountOfCards}) => {
    const [editButtonClicked, setEditButtonClicked] = useState(false);
    const[flip, setFlip] = useState(false);

    return ( 
        <>
            <div className={ `flashcard ${flip ? 'flip' : '' }` } 
            onClick={ () => setFlip(!flip)} 
            >
                {flip ? 
                <div className="back" >
                    { card.back_content }
                </div>
                :
                <div className="front" >
                    { card.front_content }
                </div>
                }
                 
                <div className="index">{index + 1}/{amountOfCards}</div>    
            </div>
            
            
            <button onClick={() => setEditButtonClicked(true)} >Edit</button>
            {editButtonClicked ? <UpdateFlashcard card_id={card.id} /> : <> </>}
        </>  
    );
}
 
export default Flashcard;