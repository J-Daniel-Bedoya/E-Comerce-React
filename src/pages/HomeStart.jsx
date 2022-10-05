import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import axios from "axios";
import "../styles/Home/HomeStart.css";
import "../styles/Home/cards.css";
import { useNavigate } from "react-router-dom";
import { setAddProduct } from "../store/slices/addProduct.slice";

const HomeStart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [searchProductsFilter, setSearchProductsFilter] = useState([]);
  const [searchProductName, setSearchProductName] = useState("");
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  useEffect(() => {
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
    if (filterName[0].title.includes(searchProductName)){
      setSearchProductsFilter(filterName)
    }else{
      alert("El producto no existe")
    }
  }

  const agregar = () => {

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
            <li onClick={() =>  dispatch(getProductsThunk())} > {/* jose este lo añadi para que me traiga todos lo productos */}
            All  products
            </li>
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
          <button onClick={filterName} className="products__input--btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="products__container--cards" >
          {
          searchProductsFilter.map((product) => (
            <div className="products__cards" key={product.id}>
              {/* quise hacer que las card fueran clicables y que al hacer click muestren el producto en detalle */}
              <div className="products__container--imag" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="products__cards--imgs" style={{backgroundImage: `url(${product.productImgs?.[0]})`}} onClick={() => navigate(`/product/${product.id}`)}></div>
              </div>
              <div onClick={() => navigate(`/product/${product.id}`)}>
                <h4>{product.title}</h4>
                <p>Price</p>
                <b>{product.price}</b>
              </div>
              <button style={{cursor: "pointer"}} className="products__btn--add" onClick={() => dispatch(setAddProduct(product))}>Agregar</button> {/* este boton es el encargado de agregar los productos para poder los comprar en la parte de cart */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStart;