import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { peerReducer } from './store/Store';
import thunk from 'redux-thunk';


// Redux Persistの設定
const persistConfig = {
  key: 'peer',
  storage,
  stateReconciler: autoMergeLevel2
};

// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, peerReducer);

// ストア、パーシスターの作成
let store = createStore(persistedReducer, applyMiddleware(thunk));
let pstore = persistStore(store);

// 表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
