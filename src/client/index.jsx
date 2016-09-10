import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { StyleSheet } from 'aphrodite'
import errorCatcher from './error-catcher'
import routes from '../routes'
import Store from '../store'
import { ApolloProvider } from 'react-apollo'
import './assets/layout.css'
import ApolloClientSingleton from '../network/apollo-client-singleton'

window.onerror = (msg, file, line, col, error) => { errorCatcher(error) }
window.addEventListener('unhandledrejection', (event) => { errorCatcher(event.reason) })

const store = new Store(browserHistory, window.INITIAL_STATE)
const history = syncHistoryWithStore(browserHistory, store.data)

StyleSheet.rehydrate(window.RENDERED_CLASS_NAMES)

ReactDOM.render(
  <ApolloProvider store={store.data} client={ApolloClientSingleton}>
    <Router history={history} routes={routes} />
  </ApolloProvider>,
  document.getElementById('mount')
)
