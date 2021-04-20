import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "react-scripts";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
    alertify.success(this.state.password + " added to db!");
    alertify.success(this.state.city + " added to db!");
    alertify.success(this.state.description + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label form="email">Email</Label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <Label form="password">password</Label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <Label form="description">description</Label>
            <input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></input>
          </FormGroup>
          <FormGroup>
            <Label form="city">City</Label>
            <input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>New York</option>
              <option>St.Petersburg</option>
              <option>London</option>
              <option>Berlin</option>
            </input>
          </FormGroup>
          <Button type='submit'>Save</Button>
        </Form>
      </div>
    );
  }
}
