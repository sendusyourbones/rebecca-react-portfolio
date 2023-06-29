import './App.css';
import {
  Header,
  About,
  Portfolio,
  Contact,
  Resume,
} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
    </div>
  );
}

export default App;
