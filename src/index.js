import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './app/store';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> 
      <Provider store={store} > 
        <React.StrictMode>
              <App />
            </React.StrictMode>

      </Provider>
        
  </Router>
  
);
