import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import App from './components/app/app.js';
import store from './store';

function Main() {
  return(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);