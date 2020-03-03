import React, { Component } from "react";

export default class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="url"
            onChange={this.props.onChange}
            type="text"
            name="url"
            value={this.props.values.url}
          ></input>
          <input
            placeholder="title"
            onChange={this.props.onChange}
            type="text"
            name="title"
            value={this.props.values.title}
          ></input>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
