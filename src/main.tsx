import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import GlobalStyles from './styles/globalStyles'
import { store } from './Redux/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Home />
    </Provider>
  </React.StrictMode>,
)
