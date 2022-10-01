import React from 'react';
import '../styles/Home/HomeStart.css'

const HomeStart = () => {
  return (
    // contenedor general de la home
    
    <div className='home'>
      <h2>Hola</h2>
      {/* filtros */}
      <div className='filters'>
        {/* filtro por precio */}
        <div className='filters__price'>
          <h2>Price</h2>
          <hr />
          <form action="" className='filters__form'>
            <div className='filters__form--input'>
              <label htmlFor="from">From</label>
              <input id='from' type="number" />
            </div>
            <div className='filters__form--input'>
              <label htmlFor="to">To</label>
              <input id='to' type="number" />
            </div>
            <div className='filters__form--btn'>
              <button>Filter price</button>
            </div>
          </form>
        </div>
        {/* filtro por categoria */}
        <div className='filters__category'>
          <h2>Category</h2>
          <hr />
          <ul className='filter__category--ul'>
            <li>Smart Tv</li>
            <li>Computer</li>
            <li>Smartphones</li>
          </ul>
        </div>
      </div>
      {/* todos los productos */}
      <div className='products'>
        <div className='products__input--container'>
          <input className='products__input' type="text" />
          <button className='products__input--btn'>Ver</button>
        </div>
        <div className='products__container--cards'>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>
          <div className='products__cards'></div>

        </div>
      </div>

    </div>
  );
};

export default HomeStart;