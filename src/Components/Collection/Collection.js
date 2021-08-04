import React, {useState} from 'react';
import './Collection.css';

const Collection = (props) => {

  const [isActive, setIsActive] = useState(false);
  

  return ( 
    <>
      <div className="row row-cols-1 p-2">
        <div className="col p-2">
          <div className={`collection ${(props.collection.id == props.collectionClickedId) ? "selected" : ''}`} onClick={()=> setIsActive(!isActive) }>
            {props.collection.name}
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Collection;