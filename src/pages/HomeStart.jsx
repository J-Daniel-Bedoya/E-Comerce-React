import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import axios from "axios";
import "../styles/Home/HomeStart.css";
import "../styles/Home/cards.css";
import { useNavigate, useParams } from "react-router-dom";
import { addProductCar } from "../store/slices/ProductCar.slice";
import { setShooping } from "../store/slices/shoopingTrue.slice";

const HomeStart = () => {
  const apiEcommerce = "https://api-e-commerce-production.up.railway.app/api/v1/";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [searchProductsFilter, setSearchProductsFilter] = useState([]);
  const [searchProductName, setSearchProductName] = useState("");
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  useEffect(() => {
    axios
      .get(`${apiEcommerce}/categories`)
      .then((res) => {
        setCategories(res.data);
        dispatch(getProductsThunk())
      });
  }, []);


  useEffect(() => {
    setSearchProductsFilter(products);
  }, [products]);
// console.log(products)
  const filterId = (id) => {
    if ( id !== "Cameras" ) {
      const filterId = products.filter(fil => fil.category.name_category === id)
      console.log(filterId)
      setSearchProductsFilter(filterId)
    }
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
      return product.name.toLowerCase().includes(nameInput)
    })
    if (filterName[0].name.includes(searchProductName)){
      setSearchProductsFilter(filterName)
    }else{
      alert("El producto no existe")
    }
  }


  const userId = localStorage.getItem("userId")

  const pageDetail = (idProd) => {
    navigate(`/product/${idProd}`)
  }
  const addProductInCart = (idProd) => {
    const dataProduct = {
      quantity: 1,
      status: true,
      productId: idProd,
    }
    dispatch(addProductCar(userId, dataProduct))
    dispatch(setShooping())
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
                required
                placeholder="60"
              />
            </div>
            <div className="filters__form--input">
              <label htmlFor="to">To</label>
              <input 
                id="to" 
                type="number" 
                value={searchTo}
                onChange={e => setSearchTo(e.target.value)}
                placeholder="1200"
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
            {categories.map((category, i) => (
              <li onClick={() => filterId(category.nameCategory)} key={i}>
                {category.nameCategory}
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
            placeholder={"Copia el titulo completo del producto"}
          />
          <button onClick={filterName} className="products__input--btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="products__container--cards" >
          {
          searchProductsFilter.map((product) => (
            <div className="products__cards" key={product.id}>
              {/* quise hacer que las card fueran clicables y que al hacer click muestren el producto en detalle */}

              <div className="products__container--imag" onClick={() => pageDetail(product.id)}>
                <img className="ImageeProduct" src={product.image[0]} alt="" />
              </div>

              <div className="products__info">
                <div className="products__info--title">
                  <h4>{product.name}</h4>
                </div>
                <div className="products__info--text">
                  <div className="products__info--price">
                    <p>Price</p>
                    <b>${product.price} USD</b>
                  </div>
                  <div>
                    <i className="fa-solid fa-cart-shopping fa-cart-shopping-icon" onClick={() => addProductInCart(product.id)}></i>
                  </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStart;