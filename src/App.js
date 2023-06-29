import './App.css';
import {
  Header,
  About,
  Portfolio,
  Contact,
  Resume,
  Footer
} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
