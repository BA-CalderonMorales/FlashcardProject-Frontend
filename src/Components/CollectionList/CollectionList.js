import React, {useState} from 'react';
import Collection from '../Collection/Collection';
import './CollectionList.css';
import AddACollection from '../AddACollection/AddACollection';

const CollectionList = (props) => {
  const [collectionClickedId, setCollectionClickedId] = useState(null);
  const [addCollectionClicked, setAddCollectionClicked] = useState(false);
  const addButtonClicked = props.buttonLocation;

  return ( 
      <>
        <div className="col-12" id="collection-list">
          <div className="row row-cols-1">
            { 
              props.collections.map((collection, index) => {
                return (
                  <div className="col" key={collection.id} onClick={() => {props.setCollectionId(collection.id); setCollectionClickedId(collection.id); props.setIndex(0); props.setIsCollectionClicked(true); }}>            
                    <Collection collection={collection} collectionClickedId={collectionClickedId} />
                  </div>
                )
              })
            }
            <div className={addButtonClicked ? `col d-flex justify-content-center align-items-center` : `col d-flex justify-content-end align-items-end`}>
              <button className="btn btn-outline-light" onClick={() => setAddCollectionClicked(true)}>
                <i class="fas fa-plus"></i>
              </button>
              {
                addCollectionClicked ? <AddACollection buttonLocationDidMount={props.buttonLocationDidMount} 
                collectionDidMount={props.collectionDidMount} 
                addCollectionClicked={addCollectionClicked} 
                setAddCollectionClicked={setAddCollectionClicked} /> : <></>
              }
            </div>
          </div>
        </div>
      </>
   );
}
 
export default CollectionList;
