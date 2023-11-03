// React Router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages/components and style imports
import './App.css';
import { About, Contact, Portfolio, Resume } from './components/pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
