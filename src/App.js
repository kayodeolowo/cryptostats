import React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout,Typography, Space} from 'antd'
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './Components'

function App() {
  return (
   <div className='app'>
      <div className='nabar'> 
        <Navbar/>

      </div>

      <div className='main'> 
        <Layout> 
          <div>
            <Routes> 
            
              <Route  path="/"
               element= { <Homepage/>}
              /> 
              <Route  path="/exchanges"
               element= { <Exchanges/>}
              /> 
              <Route  path="/cryptocurrencies"
              element= {<Cryptocurrencies/>}
              /> 

              <Route  path="/crypto/:coinId"
               element= { <CryptoDetails/>}
              />  


              <Route  path="/news"
               element= { <News/>}/> 
            </Routes> 

          </div>
        </Layout>

      </div>

      <div className='footer'> 

      </div>

   </div> 
  );
}

export default App;
