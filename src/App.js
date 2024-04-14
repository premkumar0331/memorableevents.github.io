import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact, Services, Photoshootservices, Getquote} from './components/index.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/photoshootservices' element={<Photoshootservices />} />
          <Route path='/getquote' element={<Getquote />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
