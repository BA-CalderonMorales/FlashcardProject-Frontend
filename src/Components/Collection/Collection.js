import React, { useState } from 'react';
import './Collection.css';
import FlashcardList from '../FlashcardList/FlashcardList'

const Collection = ({collection}) => {
  const [clicked, setClicked] = useState(false)

  return ( 
    <>
      <div className="row row-cols-1 p-2">
        <div className="col p-2" onClick={() => setClicked(!clicked)}>
          {collection.name}
          <div className="collection-title">
            {clicked ? <FlashcardList collectionId={collection.id} /> : ''}
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Collection;