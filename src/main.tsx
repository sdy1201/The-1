import React from 'react'

import './index.css'
import {BrowserRouter} from 'react-router-dom'
import  ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)