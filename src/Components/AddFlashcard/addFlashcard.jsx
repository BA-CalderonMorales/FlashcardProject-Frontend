import React, {useEffect} from 'react'
import useForm from '../UseForm/useForm'
import axios from 'axios';

export default function AddFlashcard({setDeck, deck}) {
    const { values, handleChange, handleSubmit } = useForm(card_added);
    
    function card_added() {
        axios.post('http://127.0.0.1:8000/all_cards/', values)
        values.front_content = ''
        values.back_content = ''
        values.deck = ''
        console.log("Card added.");
        console.log(`Confirmation: ${values.front_content}`)
        console.log(`Confirmation: ${values.back_content}`)
        console.log(`Confirmation: ${values.deck}`)
        
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/all_cards/')
        .then(response => {
          let all_cards = response.data
          setDeck(all_cards);
        })
      }, [deck])
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
                <button submit="submit">Add a Flash Card</button>
            </form>
        </>
    )
}
