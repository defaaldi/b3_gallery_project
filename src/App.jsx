import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Colombia1} from './components/Colombia1';
import { Colombia2} from './components/Colombia2';
import { Colombia3} from './components/Colombia3';
import { Colombia4} from './components/Colombia4';
import { Colombia5} from './components/Colombia5';
import { Colombia6} from './components/Colombia6';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <h1 className='text-center my-3'>Gallery Project</h1>
      </div>
      <div className='container d-flex justify-content-center'>
        <Routes>
          <Route path='/colombia1' element={<Colombia1 className='main-img-container'/>} />
          <Route path='/colombia2' element={<Colombia2 className='main-img-container'/>} />
          <Route path='/colombia3' element={<Colombia3 className='main-img-container'/>} />
          <Route path='/colombia4' element={<Colombia4 className='main-img-container'/>} />
          <Route path='/colombia5' element={<Colombia5 className='main-img-container'/>} />
          <Route path='/colombia6' element={<Colombia6 className='main-img-container'/>} />
        </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
     </BrowserRouter>
    </>
  );
};

export default App
