import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/reducers'
import middleware from './redux/middleware'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.sass'
import './styles/nav.sass'
import './styles/login.sass'
import './styles/home.sass'
import './styles/leader-board.sass'
import './styles/new-question.sass'

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)