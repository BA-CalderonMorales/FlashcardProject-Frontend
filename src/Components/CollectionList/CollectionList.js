import React from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.css';

const CollectionList = (props) => {
  return ( 
    <div className="collection-list">
      { props.collections.map(collection =>{
        return (
          <div onClick={() => {props.setCollectionId(collection.id)}}>
          <Collection collection={collection} key={collection.id} />
          </div>
        )
      })}
    </div>
   );
}
 
export default CollectionList;


//props.filterFlashcards()