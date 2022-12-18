import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import axios from "axios";
import "../styles/Home/HomeStart.css";
import "../styles/Home/cards.css";
import { useNavigate, useParams } from "react-router-dom";
import { addProductCar } from "../store/slices/ProductCar.slice";
import { setShooping } from "../store/slices/shoopingTrue.slice";
import Swal from "sweetalert2";
import { useRef } from "react";

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
  // filtrado por nombre
  const [busquedaActiva, setBusquedaActiva] = useState(null)
  const [isFocus, setIsFocus] = useState(false)
  const [placeHolder, setPlaceHolder] = useState("Copia el titulo completo del producto")
  let nameInput = searchProductName.toLowerCase();

  useEffect(() => {
    if (nameInput.length > 0) {
      setIsFocus(true)
    }else{
      setIsFocus(false)
    }
    // console.log(nameInput)
    const filterName = products.filter( product => { 
      const recorte = product.name.toLowerCase().slice(0, nameInput.length);
      return recorte.includes(nameInput);
    })
    const names = [];
    filterName.map(name => {
      names.push(name.name);
    })
    setBusquedaActiva(names)
    // console.log(n)
  }, [nameInput])

  const inputRef = useRef()

  const filterName = async(name) => {
    setSearchProductName("")
    setIsFocus(false)
    // nameInput = ""
    setPlaceHolder(name)
    const nameInput = name?.toLowerCase();
    products.filter( (product) => { 
      const tru = product.name.toLowerCase().includes(nameInput)
      if (tru) {
        setSearchProductsFilter([product])
      }
    })
  }


  const userId = localStorage.getItem("userId")
  const token = localStorage.getItem("token");

  const pageDetail = (idProd) => {
    console.log(token)
    if (token !== null && token !== "null") {
      navigate(`/product/${idProd}`)
    }else{
      Swal.fire({
        icon: "warning",
        title: "¡Registrate!",
        text: "Para poder realizar esta acción necesitas estar registrado en el sitio.",
        showDenyButton: true,
        denyButtonText: "No gracias!",
        confirmButtonText: "Ok",
      }).then(res => {
        if(res.isConfirmed) {
          navigate("/login");
        }else{
          Swal.fire({
            icon: "info",
            title: "Registro denegado",
            text: "¡No te preocupes!, podras registrarte cuando quieras",
          })
        }
      })
    }
  }
  const addProductInCart = (idProd) => {
    if (token !== null && token !== "null") {
      const dataProduct = {
        quantity: 1,
        status: true,
        productId: idProd,
      }
      dispatch(addProductCar(userId, dataProduct))
      dispatch(setShooping())
    }else{
      Swal.fire({
        icon: "warning",
        title: "¡Registrate!",
        text: "Para poder realizar esta acción necesitas estar registrado en el sitio.",
        showDenyButton: true,
        denyButtonText: "No gracias!",
        confirmButtonText: "Ok",
      }).then(res => {
        if(res.isConfirmed) {
          navigate("/login");
        }else{
          Swal.fire({
            icon: "info",
            title: "Registro denegado",
            text: "¡No te preocupes!, podras registrarte cuando quieras",
          })
        }
      })
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
        <div className="prouduts__busqueda">
          <form onSubmit={filterName} className="products__input--container">
            <input 
              ref={inputRef}
              className="products__input" 
              type="text" 
              value={searchProductName}
              onChange={e => setSearchProductName(e.target.value)}
              placeholder={placeHolder}
            />
            <button type="submit" className="products__input--btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <div className="products__busqueda--names" style={{display: isFocus && "block"}}>
            {
              busquedaActiva?.map((table, i) => (
                <div key={i} className="products__busqueda--name">
                  <p onClick={() => filterName(table)}>{table}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="products__container--cards" >
          {
          searchProductsFilter?.map((product) => (
            <div className="products__cards" key={product.id}>
              {/* quise hacer que las card fueran clicables y que al hacer click muestren el producto en detalle */}

              <div className="products__container--imag" onClick={() => pageDetail(product.id)}>
                <img className="ImageeProduct" src={product.image[0]} alt="" />
                <div className="products__stock">
                  <p>{product.availableQty}</p>
                </div>
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