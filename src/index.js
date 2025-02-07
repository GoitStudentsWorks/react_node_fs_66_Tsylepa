import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/react_node_fs_66_Tsylepa">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
