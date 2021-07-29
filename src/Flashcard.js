import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
    const[flip, setFlip] = useState(false);
    const [theHeight, setHeight] = useState('initial');

    const frontEl = useRef();
    const backEl = useRef();

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height;
        const backHeight = backEl.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(setMaxHeight, [flashcard.front, flashcard.back, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div 
            className={ `card ${flip ? 'flip' : '' }` } 
            style={{height: theHeight}}
            onClick={ () => setFlip(!flip) }>
            <div className="front" ref={ frontEl }>
                { flashcard.front }
                <div className="flashcard-options">
                { flashcard.options.map(option => {
                    return <div className="flashcard-option" key={ option }>{ option }</div>
                }) }
                </div>
            </div>
            <div className="back" ref={ backEl }>{ flashcard.back }</div>
        </div>
    )
}

// Again, props.flashcard is replaced by doing ({ flashcard })
// Changes the state of the div to true.
// All classes will have a default class of card.
// unless you click, replacing it with card flip.
// If true, show front. Otherwise, show back.
/* { flip ? flashcard.back : flashcard.front } */

// {/* 
//             
//              */}