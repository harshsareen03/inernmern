import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route,Routes } from "react-router-dom";
import Home from './Components/Home';
import { About } from './Components/About';
import HeaderT from './Components/HeaderT';
function App() {
  return (
    <>
    {/* <Header/> */}
    <HeaderT/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>

    </>
  );
}

export default App;
