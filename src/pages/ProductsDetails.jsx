import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProductCar } from "../store/slices/ProductCar.slice";
import { getProductsThunk } from "../store/slices/products.slice";
import { setShooping } from "../store/slices/shoopingTrue.slice";
import "../styles/Products/ProductsDetails.css";

const ProductsDetails = () => {
  // en la api hay una url para traer un producto por id pero no lo voy a usar pq sera un poco innecesario
  // entonces usare el slice de que tenemos con todos los productos  y los filtrare con el id y yap
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products);
  const productDetail = productList.find((product) => product.id === +id); //  aca me filtra el producto usando el id de el que esta en la url
  const [amountProduct, setAmountProduct] = useState(1); // esta en la cantidad de productos que va a comprasr
  //const {register, handleSubmit} = useForm()

// =====================================================================================================================
  const suggestionProducts = productList.filter(
    (product) => product.category.id === productDetail.category.id
  ); // aca es la logica de los productos recomendados que es que comparo la id de la categoria de cada producto de la lista y si el id de la categoria coinside con el id de la categoria que estamos mostrando me  va a mostras los productos sugeridos
  // console.log(productList);
// =====================================================================================================================

  const addCartSubmit = (amount) =>{
    const dataProduct = {
      id,
      quantity: amount
    } // este objeto trae la catidad de productos y el id
    dispatch(addProductCar(dataProduct))
    dispatch(setShooping())
  }

// =====================================================================================================================
  const [productImgUrl, setProductImgUrl] = useState("")
  // const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(0)
// =====================================================================================================================
    useEffect(() => {
      dispatch(getProductsThunk())
    }, [])
// =====================================================================================================================
  const sugProd = (sug) => {
    navigate(`/product/${sug}`)
    setNext(0)
    setAmountProduct(1)
  }
// =====================================================================================================================
  return (
    <div className="productDetails">
      {/*  los estilos los puedes quitar solo fue para ver bien lo que traiga */}

      <div className="productDetail__info">
        {/* este contianer es lo que tiene la info del producto */}
        <div className="productDetail__container--imgs">
          <div className="productDetail__container--ImgOne">
            <button onClick={() => setNext(next-1)} disabled={next <= 0}><i className="fa-solid fa-chevron-left"></i></button>
            {
              !productImgUrl ? 
                (<div style={{backgroundImage: `url(${productDetail?.productImgs[`${next}`]})`}} className="productDetails__imgsOne"></div>) 
                : (<div style={{backgroundImage: `url(${productImgUrl})`}} className="productDetails__imgsOne"></div>)
            }
            <button onClick={() => setNext(next+1)} disabled={productDetail?.productImgs.length-1 <= next}><i className="fa-solid fa-chevron-right"></i></button>
          </div>
          <div className="productDetail__arrayImgs">
            {
              /* las 3 imagenes del producto, te recuerdo que los los estilos que le pongo son solo para yo ver bien lo que pongo */
              productDetail?.productImgs.map((productImg) => (
                <div 
                  className="productDetails__imgs"
                  key={productImg}
                  style={{"backgroundImage": `url(${productImg})`}}
                  onClick={() => setProductImgUrl(productImg)}
                > 
                </div>
              ))
            }
          </div>
        </div>  
        <div className="productDetail__detail">
          <h2>{productDetail?.title}</h2>
          <p>{productDetail?.description} {/* description de producto */}</p>
          <div className="productDetail__priceAndContador">
            <div>
              <p>Price</p>
              <h3>{productDetail?.price}{/* precio de producto */}</h3>
            </div>
            <div className="productDetail__contador--container">
              <p>Quantity</p>
              <div className="productDetail__contador">
                {/* en este container esta el el contador de cuantos productos quiere */}
                <button
                  className="btn1"
                  onClick={() => setAmountProduct(amountProduct - 1)}
                  disabled={amountProduct === 1}
                >
                  - 1
                </button>
                <b>
                  {amountProduct} {/* la cantidad de productos que quiere agregar */}
                </b>
                <button 
                  className="btn2"
                  onClick={() => setAmountProduct(amountProduct + 1)}>
                  + 1
                </button>
              </div>

            </div>
          </div>
          <div onClick={() => addCartSubmit(amountProduct)} className="productDetail__addCart">
            <h4>Add to cart</h4>
          </div>
        </div>
      </div>

      {/* productos recomentados*/}
      <div className="productDetail__recommended">
        {suggestionProducts.map((suggestionProduct) => (
          <div
            key={suggestionProduct.id}
            className="productDetail__recommended--imgs"
            onClick={() => sugProd(suggestionProduct.id)}
          >
            {/* este container es el las cards de los productos sugeridos */}
            <div className="productDetail__recommended--container--imgs">
              <div className="productDetail__recommended--img" style={{backgroundImage: `url(${suggestionProduct.productImgs[0]})`}}></div>
            </div>
            <div className="productDetail__recommended--info">
              <h3> {suggestionProduct.title} </h3>
              <b> {suggestionProduct.price} </b>
            </div>
          </div>
        ))}
        {/* <button onClick={() => navigate("/")}>Home</button> este boton me llevará al home} */}
      </div>
    </div>
  );
};

export default ProductsDetails;
