import React from "react";
import { connect } from 'react-redux'

import selectors from '../state/selectors'

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
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
