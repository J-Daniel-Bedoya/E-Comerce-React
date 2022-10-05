import React from 'react';

const Fecha = ({purchaseDate}) => {

 // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const myDateVar= new Date(purchaseDate)
  //console.log(myDateVar.toLocaleDateString(undefined, options))

  //console.log();

  return (
    <div className='Header__fecha' >{myDateVar.toLocaleDateString()}</div>
  );
};

export default Fecha;