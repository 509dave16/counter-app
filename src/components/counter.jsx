import React, { Component } from "react";
import { textSize } from '../config/styles'

import { getNumberAsCurrency } from '../utils/format'
class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <span style={textSize} className="badge m-2 badge-primary">
              {this.props.counter.value}
            </span>
            <span style={textSize}>
              {this.props.counter.name + ' ' + getNumberAsCurrency(this.props.counter.price)}
            </span>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
