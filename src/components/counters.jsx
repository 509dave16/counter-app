import React, { Component } from "react";
import Counter from "./counter";

import { textSize } from '../config/styles'

import { connect } from 'react-redux'
import actions from '../state/actions'
import selectors from '../state/selectors'
import { getNumberAsCurrency } from '../utils/format'

const ITEM_NAME_FIELD = 'itemName'
const ITEM_PRICE_FIELD = 'itemPrice'

class Counters extends Component {
  constructor(props) {
    super(props)
    this.state = { itemName: '', itemPrice: '' }
  }
  render() {
    const { counters, onReset, onDecrement, onIncrement, onDelete } = this.props;
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
          <span style={textSize}>
            {'Total - ' + getNumberAsCurrency(counters.reduce((totalItemPrice, counter) => totalItemPrice + (counter.price * counter.value), 0))}
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor={ITEM_NAME_FIELD}>Item Name</label>
            <input
              required
              type="text"
              className="form-control"
              id={ITEM_NAME_FIELD}
              placeholder="Enter name"
              value={this.state.itemName}
              onChange={(event) => this.handleFieldChange(ITEM_NAME_FIELD, event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={ITEM_PRICE_FIELD}>Password</label>
            <input
              required
              type="number"
              className="form-control"
              id={ITEM_PRICE_FIELD}
              placeholder="Enter price"
              value={this.state.itemPrice}
              onChange={(event) => this.handleFieldChange(ITEM_PRICE_FIELD, event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  handleFieldChange = (key, value) => {
    // console.log('Field Change for ', key, ': ', value)
    this.setState({ [key]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { itemName: name, itemPrice: price } = this.state
    this.setState({ itemName: '', itemPrice: '' })
    this.props.onSubmit({ name, price })
  }
}

const mapStateToProps = (state) => ({ counters: selectors.items(state) })
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: counter => dispatch(actions.ormIncrementItem(counter.id)),
    onDecrement: counter => dispatch(actions.ormDecrementItem(counter.id)),
    onReset: () => dispatch(actions.ormReset()),
    onDelete: (counterId) => dispatch(actions.ormDeleteItem(counterId)),
    onSubmit: (item) => dispatch(actions.ormCreateItem(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counters);
