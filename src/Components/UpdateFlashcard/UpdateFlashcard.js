import React from 'react'
import useForm from '../UseForm/useForm'
import axios from 'axios';

const UpdateFlashcard = (props) => {
  const { values, handleChange, handleSubmit } = useForm(card_updated);

  function card_updated() {
    axios.put(`http://127.0.0.1:8000/all_cards/${props.card_id}`, values)
    values.front_content = ''
    values.back_content = ''
    values.deck = ''
    console.log("Card added.");
    console.log(`Confirmation: ${values.front_content}`)
    console.log(`Confirmation: ${values.back_content}`)
    console.log(`Confirmation: ${values.deck}`)
    
}
  return ( 
    <>
            <form onSubmit={handleSubmit}>
                <label>
                    Front Content: 
                    <input 
                    type="text"
                    name="front_content"
                    onChange={handleChange}
                    value={values.front_content}
                    required={true}
                    />
                </label>
                <label>
                    Back Content: 
                    <input 
                    type="text"
                    name="back_content"
                    onChange={handleChange}
                    value={values.back_content}
                    required={true}
                    />
                </label>
                <label>
                    Deck ID: 
                    <input 
                    type="text"
                    name="deck"
                    onChange={handleChange}
                    value={values.deck}
                    required={true}
                    />
                </label>
                <button submit="submit">Edit a Flash Card</button>
            </form>
        </>
   );
}
 
export default UpdateFlashcard;