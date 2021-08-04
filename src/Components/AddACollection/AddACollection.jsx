import React from 'react'
import useForm from '../UseForm/useForm'
import axios from 'axios';
import Modal from 'react-modal';

const AddACollection = (props) => {
    
    // Destructuring useForm to only use what's needed from it.
    // values holds all the values from the form used in this rendered form. 
    const { values, handleChange, handleSubmit } = useForm(collection_updated);

    function collection_updated() {
    // Updates a flashcard in the database. Used in conjunction with useForm.
    axios.post(`http://127.0.0.1:8000/all_decks/`, values)
    values.name = ''
    values.likes = 0
    values.deck = 0
    props.collectionDidMount()
    props.setAddCollectionClicked(false);
    console.log("Card added.");
    console.log(`Confirmation: ${values.name}`)
    console.log(`Confirmation: ${values.likes}`)
    console.log(`Confirmation: ${values.dislikes}`)
}
    Modal.setAppElement('#root');

  return ( 
        <>
            <Modal
                isOpen={props.addCollectionClicked} // True when coming in. False when closed.
                onRequestClose={() => props.setAddCollectionClicked(false)}
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
            <h1> Add Collection Here </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="name">
                        Name: 
                    </label>
                    <input 
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    required={true}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add the Collection</button>
            </form>
            </Modal>        
        </>
   );
}
 
export default AddACollection;