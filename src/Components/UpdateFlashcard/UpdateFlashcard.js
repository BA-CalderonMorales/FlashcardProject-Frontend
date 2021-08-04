import React, {useEffect} from 'react'
import useForm from '../UseForm/useForm'
import axios from 'axios';
import Modal from 'react-modal';

const UpdateFlashcard = (props) => {

    // Destructuring useForm to only use what's needed from it.
    // values holds all the values from the form used in this rendered form. 
    const { values, handleChange, handleSubmit } = useForm(card_updated);

    function card_updated() {
    // Updates a flashcard in the database. Used in conjunction with useForm.
    axios.put(`http://127.0.0.1:8000/all_cards/${props.card_id}`, values)
    values.front_content = ''
    values.back_content = ''
    values.deck = ''
    props.setEditButtonClicked(false);
    console.log("Card added.");
    console.log(`Confirmation: ${values.front_content}`)
    console.log(`Confirmation: ${values.back_content}`)
    console.log(`Confirmation: ${values.deck}`)
}
    Modal.setAppElement('#root');

  return ( 
        <>
            <Modal
                isOpen={props.editButtonClicked} // True when coming in. False when closed.
                onRequestClose={() => props.setEditButtonClicked(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '2rem'
                        }
                    }
                }
            >
            <h1> Make Changes Here </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="front-content">
                        Front Content: 
                    </label>
                    <input 
                    id="front-content"
                    type="text"
                    name="front_content"
                    onChange={handleChange}
                    value={values.front_content}
                    required={true}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Back Content: 
                    </label>
                    <input 
                    type="text"
                    name="back_content"
                    onChange={handleChange}
                    value={values.back_content}
                    required={true}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Deck ID: 
                    </label>
                    <input 
                    type="text"
                    name="deck"
                    onChange={handleChange}
                    value={values.deck}
                    required={true}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
            </Modal>        
        </>
   );
}
 
export default UpdateFlashcard;