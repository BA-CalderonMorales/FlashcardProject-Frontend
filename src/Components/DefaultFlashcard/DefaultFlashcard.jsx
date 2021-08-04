import React, {useState} from 'react';
import AddFlashcard from '../AddFlashcard/addFlashcard';

const DefaultFlashcard = (props) => {
  const [addButtonClicked, setAddButtonClicked] = useState(false);
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
                     
                    {addButtonClicked ? <></> : <button className="btn" onClick={() => setAddButtonClicked(true)}><i class="fas fa-plus fa-5x" ></i>
                    
                  </button>}
                {addButtonClicked ? <AddFlashcard cardDidMount={props.cardDidMount} addButtonClicked={addButtonClicked} setAddButtonClicked={setAddButtonClicked} /> : <> </> }
                </div>
            </div>
        </div> 
        </>  
   );
}
 
export default DefaultFlashcard;