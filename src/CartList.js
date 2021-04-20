import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartitem) => (
            <tr key={cartitem.product.id}>
              <td>{cartitem.product.id}</td>
              <td>{cartitem.product.categoryId}</td>
              <td>{cartitem.product.productName}</td>
              <td>{cartitem.product.unitPrice}</td>
              <td>{cartitem.product.unitsInStock}</td>
              <td>{cartitem.product.Quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartitem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart}</div>;
  }
}
