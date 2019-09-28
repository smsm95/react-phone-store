import React, { Component } from "react";
import { ProductConsumer } from "../context/Context";
import { storeProducts } from "../data";
import Product from "./Product";
import Title from "./Title";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"></Title>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return (
                      <Product product={product} key={product.id}></Product>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
