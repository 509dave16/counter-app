import * as React from 'react'
const ITEM_NAME_FIELD = 'itemName'
const ITEM_PRICE_FIELD = 'itemPrice'

class ItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { itemName: '', itemPrice: '' }
  }
  
  render() {
    return (
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
    )
  }

  handleFieldChange = (key, value) => {
    this.setState({ [key]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { itemName: name, itemPrice: price } = this.state
    this.setState({ itemName: '', itemPrice: '' })
    this.props.onSubmit({ name, price })
  }
}

export default ItemForm