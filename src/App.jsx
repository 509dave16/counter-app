import React, {
  Component
} from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";


import {
  Provider
} from 'react-redux'
import {
  createStore,
} from 'redux'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react"

import AppReducer from './state/reducers'
const PersistedReducer = persistReducer({
  key: 'cart-redux-orm',
  storage
}, AppReducer)
const store = createStore(PersistedReducer)

class App extends Component {
  render() {
    const LoadingSpinner = (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
    return (
      <div>
        <Provider store={store}>
          <PersistGate persistor={persistStore(store)} loading={LoadingSpinner}>
            <NavBar />
            <main className="container">
              <Counters />
              </main>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;