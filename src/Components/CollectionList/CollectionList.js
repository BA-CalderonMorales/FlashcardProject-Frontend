import React from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.css';

const CollectionList = ({collections} ) => {
  return ( 
    <div className="collection-list">
      { collections.map(collection =>{
        return <Collection collection={collection} key={collection.id} />
      })}
    </div>
   );
}
 
export default CollectionList;