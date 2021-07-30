import React, { useState } from 'react';
import './Collection.css';
import FlashcardList from '../FlashcardList/FlashcardList'

const Collection = (props) => {

  return ( 
    <>
      <div className="row row-cols-1 p-2">
        <div className="col p-2" >
          {props.collection.name}
        </div>
      </div>
    </>
   );
}
 
export default Collection;