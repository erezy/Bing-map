import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export let Microsoft;

export function loadBingApi() {
  const callbackName = "bingAPIReady";
  const key  = "";
  let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}&key=${key}`;

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = url;
    window[callbackName] = () => {
      Microsoft = window.Microsoft;
      resolve();
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.body.appendChild(script);
  });
}

let loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 
const persistedState = loadState();

export const store = createStore(rootReducer,persistedState);

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

store.subscribe(() => {
  saveState({
    locs: store.getState().locs,
  });
});

render(<Provider store={store}>
      <App />
      </Provider>, document.getElementById('root'));
