import React, {useState} from 'react'
import Flashcard from '../Flashcard/Flashcard';
import AddFlashcard from '../AddFlashcard/addFlashcard';

const FlashcardList = ({filteredDeck}) => {
    // const [addButtonClicked, setAddButtonClicked] = useState(false);
    
    return ( 
        <>
        
            
            <div className="container-fluid" id="flashcard-display">
                {
                    filteredDeck.map((card) => {
                        return <Flashcard card={card} key={card.id} />
                    })
                }
                <AddFlashcard/>
            </div>
            
            
            
            
        </>
    );
}


export default FlashcardList;

/* <div>
                
                </div>
                <div>
                    {addButtonClicked ? <AddFlashcard /> : <></>}
                </div> */