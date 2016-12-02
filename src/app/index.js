import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory, browserHistory} from 'react-router'
import routes from './routes'
import ENV from '../env/index.js'
import 'babel-polyfill'
import 'antd/dist/antd.less'

const history = location.pathname != '/' ? browserHistory : hashHistory;
ReactDOM.render(
    <Router history={history} routes={routes} />,
    document.getElementById('container')
);