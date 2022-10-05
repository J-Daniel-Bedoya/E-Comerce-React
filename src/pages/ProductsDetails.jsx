import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Products/ProductsDetails.css";

const ProductsDetails = () => {
  // en la api hay una url para traer un producto por id pero no lo voy a usar pq sera un poco innecesario
  // entonces usare el slice de que tenemos con todos los productos  y los filtrare con el id y yap
  const { id } = useParams();
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products);
  const productDetail = productList.find((product) => product.id === +id); //  aca me filtra el producto usando el id de el que esta en la url
  const [amountProduct, setAmountProduct] = useState(1); // esta en la cantidad de productos que va a comprasr
  const suggestionProducts = productList.filter(
    (product) => product.category.id === productDetail.category.id
  ); // aca es la logica de los productos recomendados que es que comparo la id de la categoria de cada producto de la lista y si el id de la categoria coinside con el id de la categoria que estamos mostrando me  va a mostras los productos sugeridos
  // console.log(productList);

  return (
    <div className="productDetails">
      {/*  los estilos los puedes quitar solo fue para ver bien lo que traiga */}

      <div className="productDetail__info">
        {/* este contianer es lo que tiene la info del producto */}
        <div className="productDetail__container--imgs">
          {
            /* las 3 imagenes del producto, te recuerdo que los los estilos que le pongo son solo para yo ver bien lo que pongo */
            productDetail?.productImgs.map((productImg) => (
              <div className="productDetails__imgs"
                key={productImg}
                style={{"backgroundImage": `url(${productImg})`}}
              >
                {/* <img src={} alt="" /> */}
              {/* k */}

              </div>
            ))
          }
        </div>
        <h2>{productDetail?.title}</h2>
          <p>
            {" "}
            {productDetail?.description} {/* description de producto */}{" "}
          </p>
          <h3>
            {" "}
            {productDetail?.price}
            {/* precio de producto */}{" "}
          </h3>
        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          {" "}
          {/* en este container esta el el contador de cuantos productos quiere */}
          <button
            onClick={() => setAmountProduct(amountProduct - 1)}
            disabled={amountProduct === 1}
          >
            {" "}
            - 1
          </button>
          <b>
            {amountProduct} {/* la cantidad de productos que quiere agregar */}{" "}
          </b>
          <button onClick={() => setAmountProduct(amountProduct + 1)}>
            {" "}
            + 1{" "}
          </button>
        </div>
      </div>

      {/* productos recomentados*/}
      <div
        style={{
          margin: "2rem 0",
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {suggestionProducts.map((suggestionProduct) => (
          <div
            key={suggestionProduct.id}
            style={{ width: "200px", border: "1px solid black", cursor: "pointer" }}
            onClick={() => navigate(`/product/${suggestionProduct.id}`)}
            
          >
            {" "}
            {/* este container es el las cards de los productos sugeridos */}
            <img
              style={{ width: "100px" }}
              src={suggestionProduct.productImgs[0]}
              alt=""
            />
            <h3> {suggestionProduct.title} </h3>
            <b> {suggestionProduct.price} </b>
          </div>
        ))}
        <button onClick={() => navigate("/")}>Home</button> {/* este boton me llevará al home */}
      </div>
    </div>
  );
};

export default ProductsDetails;
