import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import axios from "axios";
import "../styles/Home/HomeStart.css";
import "../styles/Home/cards.css";
import ShoppingCart from "../components/ShoppingCart";

const HomeStart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const shooping = useSelector(state => state.shooping)
console.log(shooping)
  const [categories, setCategories] = useState([]);

  const [searchProductsFilter, setSearchProductsFilter] = useState([]);

  const [searchProductName, setSearchProductName] = useState("");
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');


  useEffect(() => {
    dispatch(getProductsThunk());
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => {
        setCategories(res.data.data.categories);
      });
  }, []);

  useEffect(() => {
    setSearchProductsFilter(products);
  }, [products]);

  const filterId = (id) => {
    const filterId = products.filter(fil => fil.category.id === id)
    setSearchProductsFilter(filterId)
  }

  const filterPrice = () => {
    const filterPrice = products.filter( product => {
      return product.price >= (+searchFrom - 1) && product.price <= (+searchTo + 1)
    })
    setSearchProductsFilter(filterPrice)
  }
  const filterName = () => {
    const nameInput = searchProductName.toLowerCase()
    const filterName = products.filter( product => { 
      return product.title.toLowerCase().includes(nameInput)
    })
    console.log(filterName)
    if (filterName[0].title(searchProductName)){
      setSearchProductsFilter(filterName)
    }else{
      alert("El producto no existe")
    }
  }

  return (
    // contenedor general de la home

    <div className="home">
      {/* filtros */}

      <div className="filters">
        {/* filtro por precio */}
        <div className="filters__price">
          <h2>Price</h2>
          <hr />
          <form action="" className="filters__form">
            <div className="filters__form--input">
              <label htmlFor="from">From</label>
              <input 
                id="from" 
                type="number" 
                value={searchFrom}
                onChange={e => setSearchFrom(e.target.value)}
              />
            </div>
            <div className="filters__form--input">
              <label htmlFor="to">To</label>
              <input 
                id="to" 
                type="number" 
                value={searchTo}
                onChange={e => setSearchTo(e.target.value)}
              />
            </div>
            <div className="filters__form--btn">
              <button type="button" onClick={filterPrice}>Filter price</button>
            </div>
          </form>
        </div>
        {/* filtro por categoria */}
        <div className="filters__category">
          <h2>Category</h2>
          <hr />
          <ul className="filter__category--ul">
            {categories.map((category) => (
              <li onClick={() => filterId(category.id)} key={category.id}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* todos los productos */}
      <div className="products">
        <div className="products__input--container">
          <input 
            className="products__input" 
            type="text" 
            value={searchProductName}
            onChange={e => setSearchProductName(e.target.value)}
          />
          <button onClick={filterName} className="products__input--btn">Ver</button>
        </div>
        <div className="products__container--cards">
          {
          searchProductsFilter.map((product) => (
            <div className="products__cards" key={product.id}>
              <div>
                <img
                  className="products__cards--imgs"
                  src={product.productImgs?.[1]}
                  alt=""
                />
              </div>
              <div>
                <h4>{product.title}</h4>
                <p>Price</p>
                <b>{product.price}</b>
              </div>
              <button>Ver</button>
            </div>
          ))}
        </div>
      </div>
      {
        shooping && <ShoppingCart />
      }
    </div>
  );
};

export default HomeStart;