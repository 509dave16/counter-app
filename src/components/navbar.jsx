import React from "react"

import { connect, useDispatch } from 'react-redux'
import actions from "../state/actions"
import selectors from '../state/selectors'

import { CART_PAGE } from "../config/constants"

const NavBar = ({ totalCounters }) => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <span onClick={() => dispatch(actions.navigationChangePage(CART_PAGE))}>
          <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        </span>
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({ totalCounters: selectors.items(state).length })
export default connect(mapStateToProps)(NavBar);
