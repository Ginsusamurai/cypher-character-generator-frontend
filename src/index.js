import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import App from './components/app/app.js';
import store from './store';
import './style/base.scss';

function Main() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);