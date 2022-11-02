import React from 'react';

const Fecha = ({purchaseDate}) => {

  const myDateVar= new Date(purchaseDate)

  return (
    <div className='info__tabla' >
      <div className='Header__fecha'>
        {myDateVar.toLocaleDateString()}
      </div>
      <div className='info__tabla--text'>
        <p>Img Products</p>
        <p>Title Products</p>
        <p>Quantity Products</p>
        <p>Price Product</p>
      </div>
    </div>
  );
};

export default Fecha;