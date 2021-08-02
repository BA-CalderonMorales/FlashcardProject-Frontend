import React,{ useState } from 'react';

const useForm = (callback) => {
    // Hook for state variable and function to update state variable.
    const[values, setValues] = useState([]);


    const handleChange = (event) => {
        // Calling event.persist() allows references to the event 
        // to occur asynchronously.
        event.persist();

        // ...values (previous values) spread syntax.
        setValues(values => ( 
            {
                ...values, 
                [event.target.value]: event.target.values
            } 
        ));
    }

    const handleSubmit = (event) => {
        // prevent default behavior of onSubmit, which refreshes page.
        event.preventDefault();

        // callback function passed in through props.
        callback();
    }

    return { values, handleChange, handleSubmit }
}
 
export default useForm;