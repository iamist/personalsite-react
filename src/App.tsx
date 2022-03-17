import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Pages from './pages';

function App() {
  return (
    <div className="App container">
      <Header headerNavItems={Pages} />
      <div
      className="main-wrapper container mt-20 sm:mt-40 lg:mt-50 sm:pb-20 lg:pb-30"
      >
        <Routes>
          {
            Pages.map( page => {
                return <Route path={page.path} element={page.import.default({})} />
            })
          }
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
