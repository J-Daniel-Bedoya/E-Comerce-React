import React from 'react';

const Fecha = ({purchaseDate}) => {

 // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const myDateVar= new Date(purchaseDate)
  //console.log(myDateVar.toLocaleDateString(undefined, options))

  //console.log();

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