import React, {useEffect} from 'react'
import useForm from '../UseForm/useForm'
import axios from 'axios';
import Modal from 'react-modal';

export default function AddFlashcard(props) {
    const { values, handleChange, handleSubmit } = useForm(card_added);

    function card_added() {
        values.deck = props.deckId
        axios.post('http://127.0.0.1:8000/all_cards/', values)
        values.front_content = ''
        values.back_content = ''
        props.setAddButtonClicked(false);
        props.cardDidMount()
        console.log("Card added.");
        console.log(`Confirmation: ${values.front_content}`)
        console.log(`Confirmation: ${values.back_content}`)
        console.log(`Confirmation: ${values.deck}`)
    }

    Modal.setAppElement('#root');
      return (
        <>
            <Modal
                isOpen={props.addButtonClicked} // True when coming in. False when closed.
                onRequestClose={() => props.setAddButtonClicked(false)}
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
                <h1>Add a Flashcard</h1>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                    Front Content: 
                    </label>
                    <input 
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
                {/* <div className="form-group">
                    <label>
                    Deck ID:
                    </label> 
                    <input 
                    type="text"
                    name="deck"
                    placeholder={props.deckId}
                    onChange={handleChange}
                    value={values.deck}
                    required={false}
                    />
                </div> */}
                    <button submit="submit" className="btn btn-primary">Add a Flash Card</button>
                </form>
            </Modal>
        </>
    )
}
