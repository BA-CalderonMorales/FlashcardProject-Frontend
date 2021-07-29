import React, { useState } from 'react';

const Collection = ({collection}) => {
  const [clicked, setClicked] = useState(false)
  
  return ( 
    <div className={`collection ${clicked ? 'clicked' : '' }`}
    onClick={() => setClicked(!clicked)}
    >
      {collection.name}
    </div>
   );
}
 
export default Collection;