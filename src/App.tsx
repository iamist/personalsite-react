import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Pages from './pages';

function App() {
  return (
    <div className="app flex flex-col min-h-screen justify-between">
      <Header headerNavItems={Pages} />
      <div className="main-wrapper flex-1">
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
