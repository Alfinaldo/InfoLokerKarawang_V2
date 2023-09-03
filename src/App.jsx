import{Routes, Route} from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';

import AboutUsPage from './pages/AboutUsPage';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import SyaratKetentuanPage from './pages/SyaratKetentuanPage';
import UpdtPage from './pages/UpdtPage';





function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/about' Component={AboutUsPage} />
      <Route path='/updt' Component={UpdtPage} />
      <Route path='/faq' Component={FaqPage} />
      <Route path='/syaratketentuan' Component={SyaratKetentuanPage} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App;
