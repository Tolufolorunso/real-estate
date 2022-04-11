import {BrowserRouter,Routes, Route} from 'react-router-dom'
import AppBar from './commons/AppBar';
import TopAppBar from './commons/TopAppBar';
import {Home,About,NotFound,Property} from './pages'

function App() {
  return (
    <>
    <BrowserRouter>
    <TopAppBar />
    <AppBar />
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='about' element={<About />}/>
       <Route path='properties' element={<Property />}/>
       <Route path='*' element={<NotFound />}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
