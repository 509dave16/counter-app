import React, { Component } from "react";
import Counter from "./counter";
import ItemForm from "./ItemForm"
import Total from './Total'

import { textSize } from '../config/styles'

import { connect } from 'react-redux'
import actions from '../state/actions'
import selectors from '../state/selectors'
import { CHECKOUT_PAGE } from "../config/constants"

class Counters extends Component {
  render() {
    const { counters, onReset, onDecrement, onIncrement, onDelete, onSubmit } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={onReset}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
        <div>
          <span style={textSize} className="badge m-2 badge-primary">
            {counters.reduce((totalItemCount, counter) => totalItemCount + counter.value, 0)}
          </span>
          <Total items={counters} />
        </div>
        <ItemForm onSubmit={onSubmit} />
        <div className="row justify-content-center">
          <button onClick={this.goToCheckout} class="btn btn-success" type="button">Checkout</button>
        </div>
      </div>
    );
  }

  goToCheckout = () => {
    if (this.props.counters.length === 0) {
      alert("No items to checkout with. Please add 1 or more items.")
      return
    }
    this.props.goToCheckout()
  }
}

const mapStateToProps = (state) => ({ counters: selectors.items(state) })
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: counter => dispatch(actions.ormIncrementItem(counter.id)),
    onDecrement: counter => dispatch(actions.ormDecrementItem(counter.id)),
    onReset: () => dispatch(actions.ormReset()),
    onDelete: (counterId) => dispatch(actions.ormDeleteItem(counterId)),
    onSubmit: (item) => dispatch(actions.ormCreateItem(item)),
    goToCheckout: () => dispatch(actions.navigationChangePage(CHECKOUT_PAGE))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counters);
