import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider } from 'react-redux'
import { persistor, store } from './store/store'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <ToastContainer />
            <App />
        </PersistGate>
      </Provider>
  </StrictMode>,
)
