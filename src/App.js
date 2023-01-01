import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';
import Transactions from './pages/Transactions';
import About from './pages/About';
import Builders from './pages/Builders';


function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<div></div>} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/locations" element={<Transactions/>}/>
                  <Route exact path="/locations2" element={<Builders/>}/>
                  <Route exact path="/profile" element={<About/>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;