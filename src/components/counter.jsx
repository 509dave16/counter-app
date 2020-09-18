import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <span style={styles.textSize} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
            <span style={styles.textSize}>
              {this.props.counter.name + ' ' + this.getPrice()}
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

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  getPrice = () => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Number.parseFloat(this.props.counter.price))
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

const styles = ({
  textSize: {
    fontSize: '24px',
  },
  actions: {
    marginLeft: '5px',
  },
})

export default Counter;
