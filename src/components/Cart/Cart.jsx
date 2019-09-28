import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import Empty from "./Empty";
import { ProductConsumer } from "../../context/Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { length } = value.cart;
            if (length > 0)
              return (
                <React.Fragment>
                  <Title name="your" title="Cart"></Title>
                  <CartColumns></CartColumns>
                  <CartList value={value}></CartList>
                  <CartTotals value={value}></CartTotals>
                </React.Fragment>
              );
            else {
              return (
                <React.Fragment>
                  <Empty></Empty>
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
