import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.lenght}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((carItem) => (
            <DropdownItem key={carItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(carItem.product)}></Badge>
              {carItem.product.productName}
              <Badge color="success">{carItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.lenght > 0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    );
  }
}

export default CartSummary;
