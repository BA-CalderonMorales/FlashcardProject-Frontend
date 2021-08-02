import React from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.css';

const CollectionList = (props) => {
  return ( 
    <div className="collection-list">
      { props.collections.map(collection =>{
        return (
          <div onClick={() => {props.setCollectionId(collection.id); props.setIndex(0); props.setIsCollectionClicked(true)}}  key={collection.id}>
            <Collection collection={collection} />
          </div>
        )
      })}
    </div>
   );
}
 
export default CollectionList;
