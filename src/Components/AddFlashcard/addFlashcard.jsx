import React from 'react'

export default function AddFlashcard() {
    const { values, handleChange, handleSubmit } = useForm(card_added);
    
    function card_added() {
        console.log("Card added.");
        console.log(`Confirmation: ${values.front_content}`)
        console.log(`Confirmation: ${values.back_content}`)
        console.log(`Confirmation: ${values.deck}`)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>

            </form>
        </>
    )
}
