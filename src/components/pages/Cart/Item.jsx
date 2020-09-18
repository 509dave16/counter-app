import React, { Component } from "react";
import { textSize } from '../../../config/styles'

import { getNumberAsCurrency } from '../../../utils/format'
class Item extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <span style={textSize} className="badge m-2 badge-primary">
              {this.props.item.count}
            </span>
            <span style={textSize}>
              {this.props.item.name + ' ' + getNumberAsCurrency(this.props.item.price)}
            </span>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.item)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.item)}
              disabled={this.props.item.count === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.item.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
