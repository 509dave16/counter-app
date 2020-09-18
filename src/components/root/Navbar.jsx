import React from "react"

import { connect, useDispatch } from 'react-redux'
import actions from "../../state/actions"
import selectors from '../../state/selectors'

import { CART_PAGE } from "../../config/constants"

const NavBar = ({ totalItems, page }) => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-light bg-light row justify-content-space-between">
      <div className="navbar-brand col-md-2">
        <span onClick={() => dispatch(actions.navigationChangePage(CART_PAGE))}>
          <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        </span>
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalItems}
        </span>
        Items
      </div>
      <h1>{page}</h1>
      <div className="col-md-2"></div>
    </nav>
  );
};

const mapStateToProps = (state) => ({ totalItems: selectors.items(state).length, page: state.navigation.currentPage })
export default connect(mapStateToProps)(NavBar);
