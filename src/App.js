import './App.css';
import HomePage from './components/Pages/HomePage';
import { Routes,Route } from 'react-router-dom'
import MenuPage from './components/Pages/MenuPage';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
      
   <Routes>
    <Route path={'/'} element={<HomePage /> }/>
    <Route path={'/menu'} element={<MenuPage /> }/>
   </Routes>
       </div>
  );
}





export default App;
