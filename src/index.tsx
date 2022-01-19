import ReactDOM from 'react-dom'

import { App } from './app'
import { Template } from './components/template'

const app = document.getElementById('app')
ReactDOM.render(
  <Template>
    <App />
  </Template>,
  app,
)
