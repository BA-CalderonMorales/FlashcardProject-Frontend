import React, {useState} from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.css';

const CollectionList = (props) => {
  const [collectionClickedId, setCollectionClickedId] = useState(null);
  return ( 
      <>
      <div className="collection-list">
        { props.collections.map((collection, index) => {
          return (
            <div key={collection.id} onClick={() => {props.setCollectionId(collection.id); setCollectionClickedId(collection.id); props.setIndex(0); props.setIsCollectionClicked(true); }}>            
              <Collection collection={collection} collectionClickedId={collectionClickedId} />
            </div>
          )
        })}
      </div>
      <div className="add-collection">
        Add a Collection
        {/* {
          <AddACollection />
        } */}
      </div>
      </>
   );
}
 
export default CollectionList;
