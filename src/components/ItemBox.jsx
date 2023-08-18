import React from 'react';

const ItemBox = ({ category, onClick }) => {
  return (
    <div className="item-box" onClick={onClick}>
      <h3 className='item-heading'>{category}</h3>
      <p className='item-detail'>Unlimited jokes on {category}</p>
    </div>
  );
};

export default ItemBox;