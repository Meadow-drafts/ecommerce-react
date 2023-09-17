import React from 'react';

const CategoryIcon = ({ imageUrl, categoryName, color }) => {
  return (
  <div className="category-icon  flex flex-col items-center lg:w-1/6 sm:w-1/2 xs:1/2">
    <div className='border-2 w-32 m-2 items-center p-3'>
    <img src={imageUrl} alt={categoryName} style={{ width: '50px', height: '50px', color: color }} />

      <div className="category-name">{categoryName}</div>
    </div>
      
    </div>
  );
};

export default CategoryIcon;
