import React from 'react';
import Collection from '../Collection/Collection';

const CollectionList = ({collections} ) => {
  return ( 
    <div className="card-grid">
      { collections.map(collection =>{
        return <Collection collection={collection} key={collection.id} />
      })}
    </div>
   );
}
 
export default CollectionList;