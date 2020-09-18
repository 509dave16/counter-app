import React, { Component } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm"
import Total from '../../widgets/Total'

import { textSize } from '../../../config/styles'

import { connect } from 'react-redux'
import actions from '../../../state/actions'
import selectors from '../../../state/selectors'
import { CHECKOUT_PAGE } from "../../../config/constants"

class Cart extends Component {
  render() {
    const { items, onReset, onDecrement, onIncrement, onDelete, onSubmit } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={onReset}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
        <div>
          <span style={textSize} className="badge m-2 badge-primary">
            {items.reduce((totalItemCount, item) => totalItemCount + item.count, 0)}
          </span>
          <Total items={items} />
        </div>
        <ItemForm onSubmit={onSubmit} />
        <div className="row justify-content-center">
          <button onClick={this.goToCheckout} class="btn btn-success" type="button">Checkout</button>
        </div>
      </div>
    );
  }

  goToCheckout = () => {
    if (this.props.items.length === 0) {
      alert("No items to checkout with. Please add 1 or more items.")
      return
    }
    this.props.goToCheckout()
  }
}

const mapStateToProps = (state) => ({ items: selectors.items(state) })
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: item => dispatch(actions.ormIncrementItem(item.id)),
    onDecrement: item => dispatch(actions.ormDecrementItem(item.id)),
    onReset: () => dispatch(actions.ormReset()),
    onDelete: (itemId) => dispatch(actions.ormDeleteItem(itemId)),
    onSubmit: (item) => dispatch(actions.ormCreateItem(item)),
    goToCheckout: () => dispatch(actions.navigationChangePage(CHECKOUT_PAGE))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
