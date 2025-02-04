import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

  const Product = () => {
  const [product, setProduct] = useState([]);
  const { productName } = useParams(); // Get productName from URL

  useEffect(() => {
    fetch("/AppleData.json") // Fetch product data
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Log the response to check structure
        const productList = res.data; // Correct path to product data
        console.log("productName from URL:", productName);

        const singleProduct = productList.filter(
          (product) => product.product_name === productName
        );
        console.log("Filtered Product:", singleProduct); // Log filtered product(s)
        setProduct(singleProduct); // Set the fetched product(s)
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productName]);

  if (product.length === 0) {
    return <Four04 />;
  }
  
  return (
    <div>
      <br />
      <br />
      <br />
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold mt-5">Products</div>
              <div className="brief-description mb-4">
                The best for the brightest.
              </div>
            </div>
          </div>

          {product.length > 0 ? (
            product.map((prod) => (
              <div key={prod.id} className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
                <div className="col-sm-12 col-md-6 my-auto">
                  <div className="product-title">{prod.product_name}</div>
                  <div className="product-brief">{prod.product_description}</div>
                  <div className="starting-price">{`Starting at ${prod.starting_price}`}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href={`/iphone/${prod.product_name}`}>Learn more</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="product-image">
                    <img src={prod.product_url} alt={prod.product_name} className="img-fluid" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading product data...</div> 
          )}
        </div>
      </section>
    </div>
  );
};

export default Product;
