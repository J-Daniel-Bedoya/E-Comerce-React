import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProductCar } from "../store/slices/ProductCar.slice";
import { getProductsThunk } from "../store/slices/products.slice";
import { setShooping } from "../store/slices/shoopingTrue.slice";
import "../styles/Products/ProductsDetails.css";

const ProductsDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products);
  const productDetail = productList.find((product) => product.id === +id); 
  const [amountProduct, setAmountProduct] = useState(1);


  const suggestionProducts = productList.filter(
    (product) => product.category.name_category === productDetail.category.name_category
  ); 
 console.log(productList)
  const userId = localStorage.getItem("userId")

  const addCartSubmit = (id, amount) =>{
    const dataProduct = {
      quantity: amount,
      status: true,
      productId: id,
    }
    dispatch(addProductCar(userId, dataProduct))
    dispatch(setShooping())
  }


  const [productImgUrl, setProductImgUrl] = useState("")

  const [next, setNext] = useState(0)

    useEffect(() => {
      dispatch(getProductsThunk())
    }, [])

  const sugProd = (sug) => {
    navigate(`/product/${sug}`)
    setNext(0)
    setAmountProduct(1)
  }

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
                (<div style={{backgroundImage: `url(${productDetail?.image[next]})`}} className="productDetails__imgsOne"></div>) 
                : (<div style={{backgroundImage: `url(${productImgUrl})`}} className="productDetails__imgsOne"></div>)
            }
            <button onClick={() => setNext(next+1)} disabled={productDetail?.image?.length-1 <= next}><i className="fa-solid fa-chevron-right"></i></button>
          </div>
          <div className="productDetail__arrayImgs">
            {
              /* las 3 imagenes del producto, te recuerdo que los los estilos que le pongo son solo para yo ver bien lo que pongo */
              productDetail?.image.map((productImg, i) => (
                <div 
                  className="productDetails__imgs"
                  key={i}
                  style={{"backgroundImage": `url(${productImg})`}}
                  onClick={() => setProductImgUrl(productImg)}
                > 
                </div>
              ))
            }
          </div>
        </div>  
        <div className="productDetail__detail">
          <h2>{productDetail?.name}</h2>
          <p>{productDetail?.description} {/* description de producto */}</p>
          <div className="productDetail__priceAndContador">
            <div>
              <p>Price</p>
              <h3>$ {productDetail?.price} USD{/* precio de producto */}</h3>
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
          <div onClick={() => addCartSubmit(productDetail.id, amountProduct)} className="productDetail__addCart">
            <h4>Add to cart</h4>
          </div>
        </div>
      </div>

      {/* productos recomentados*/}
      <div className="productDetail__recommended">
        <div className="center__prod-recommended">
          {suggestionProducts.map((suggestionProduct, i) => (
            <div
              key={i}
              className="productDetail__recommended--imgs"
              onClick={() => sugProd(suggestionProduct.id)}
            >
              {/* este container es el las cards de los productos sugeridos */}
              <div className="productDetail__recommended--container--imgs">
                <div className="productDetail__recommended--img" style={{backgroundImage: `url(${suggestionProduct.image?.[0]})`}}></div>
              </div>
              <div className="productDetail__recommended--info">
                <h3> {suggestionProduct.name} </h3>
                <b>$ {suggestionProduct.price} USD</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
