import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/AppleData.json")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data); // Extract product list
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold mt-5">Iphones</div>
              <div className="brief-description mb-4">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            const {
              id,
              product_name, // Do not overwrite this
              product_url: img,
              product_description: description,
              starting_price: startPrice,
            } = product;

            let order1 = 1;
            let order2 = 2;``
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            return (
              <div key={id} className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product_name}</div>
                  <div className="product-brief">{description}</div>
                  <div className="starting-price">{`Starting at ${startPrice}`}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product_name}`}>Learn more</Link> {/* Use product_name directly */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt={product_name} className="img-fluid" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Iphone;
