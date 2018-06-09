import React, { Component } from 'react'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import Home from './screens/frontend/Home'
import About from './screens/frontend/About'
import Topics from './screens/frontend/Topics'
import KYBRegistration from './screens/frontend/KYBRegistration'
import Login from './screens/frontend/Login'
import Borrow from './screens/frontend/Borrower'

import AdminDonate from './screens/backend/AdminDonate'

import { MODULE_NAME as HOME_MODULE_NAME } from './modules/frontend/home/model'
import { MODULE_NAME as USER_MODULE_NAME } from './modules/frontend/login/model'
import { MODULE_NAME as BORROW_MODULE_NAME } from './modules/frontend/borrow/model'
import { MODULE_NAME as ADMIN_DONATE_MODULE_NAME } from './modules/backend/donate/model'
import homeReducer from './modules/frontend/home/reducers'
import userReducer from './modules/frontend/login/reducers'
import borrowReducer from './modules/frontend/borrow/reducers'
import adminDonateReducer from './modules/backend/donate/reducers'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const middleware = routerMiddleware(history)

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(
  combineReducers({
    [HOME_MODULE_NAME]: homeReducer,
    [BORROW_MODULE_NAME]: borrowReducer,
    [USER_MODULE_NAME]: userReducer,

    // Admin
    [ADMIN_DONATE_MODULE_NAME]: adminDonateReducer,
    router: routerReducer
  }),
  enhancer // applyMiddleware(middleware)
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/kyb-registration' component={KYBRegistration} />
            <Route path='/topics' component={Topics} />
            <Route path='/login' component={Login} />
            <Route path='/user/borrow' component={Borrow} />

            {/* TODO: Admin */}
            <Route path='/admin/donate-management' component={AdminDonate} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App

// import logo from './logo.svg'
// import './App.css'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
