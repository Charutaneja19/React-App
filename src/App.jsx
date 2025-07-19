import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage'
import list from './list';
import { Routes, Route , Link , useNavigate} from 'react-router-dom';
import HomePage from './HomePage'
function App() {
const userData = [
        {
            id: 1,
            name: 'Charu',
            email: 'charutaneja02@gmail.com',
            password: 'charu123',
            role: 'User',
        },
        {
            id: 2,
            name: 'Prasann',
            email: 'prasannsethi02@gmail.com',
            password: 'prasann123',
            role: 'Admin',
        },
        {
            id: 3,
            name: 'Ram',
            email: 'ram01@gmail.com',
            password: 'ram123',
            role: 'Manager',
        },
        {
            id: 4,
            name: 'Shreyansh',
            email: 'shreyansh01@gmail.com',
            password: 'shreyansh123',
            role: 'User',
        },
        {
            id: 5,
            name: 'Satvik',
            email: 'satvik02@gmail.com',
            password: 'satvik123',
            role: 'User',
        }
    ];
    localStorage.setItem('userData',JSON.stringify(userData));
    const navigate = useNavigate();
  return (
    <>
     {/* <button onClick = {() => { navigate('/login')}}>Login</button> */}
     {/* <Link to = '/login'>Login</Link> */}

      <Routes>
  
        <Route path = '/'  element = {<LoginPage></LoginPage>}></Route>
        <Route path = '/home/:role' element = {<HomePage></HomePage>}></Route>
      </Routes>
      <list/>
    </>
  )
}

export default App
