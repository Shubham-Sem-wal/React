import { Outlet } from 'react-router-dom';
import './App.css';
import Body from './Component/Body';
import Header from './Component/Header.jsx';
// import AboutUs from './Component/AboutUs.jsx';

function App() {
  return (
    <>
     <Header/>
     <Outlet/>
    </>
  );
};



export default App
