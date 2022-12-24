import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/config/configStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider로 App 감싸주고 store 속성 넣어주기
  <Provider store={store}>
    <App />
  </Provider>
);
