import React, {useState} from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.css';
import AddACollection from '../AddACollection/AddACollection';

const CollectionList = (props) => {
  const [collectionClickedId, setCollectionClickedId] = useState(null);
  const [addCollectionClicked, setAddCollectionClicked] = useState(false);

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
        <button onClick={() => setAddCollectionClicked(true)}>
        Add a Collection
        </button>
        {
          addCollectionClicked ? <AddACollection addCollectionClicked={addCollectionClicked} setAddCollectionClicked={setAddCollectionClicked} /> : <></>
        }
      </div>
      </>
   );
}
 
export default CollectionList;
