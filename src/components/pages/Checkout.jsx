import * as React from 'react'
import Total from '../widgets/Total'

import { connect } from 'react-redux'

import selectors from '../../state/selectors'
import { getNumberAsCurrency } from '../../utils/format'

class Checkout extends React.Component {
  render() {
    const { items } = this.props
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Count</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(({ name, price, count}) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{getNumberAsCurrency(price)}</td>
                  <td>{count}</td>
                </tr>
              ))
            }
            <tr>
              <td><Total items={items} /></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ items: selectors.items(state) })
export default connect(mapStateToProps)(Checkout)